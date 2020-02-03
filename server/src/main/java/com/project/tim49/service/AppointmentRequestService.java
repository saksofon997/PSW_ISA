package com.project.tim49.service;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.dto.PatientDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.validation.ValidationException;
import java.util.*;

@Service
//@PersistenceContext(type = PersistenceContextType.EXTENDED)
public class AppointmentRequestService {

    @Autowired
    private AppointmentRequestRepository appointmentRequestRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private TypeOfExaminationRepository typeOfExaminationRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private DoctorService doctorService;
    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private OrdinationService ordinationService;
    @Autowired
    private OrdinationRepository ordinationRepository;
    @Autowired
    private EmailService emailService;

    public ArrayList<AppointmentDTO> getClinicAppointmentRequests(Long clinic_id){
        Clinic clinic = clinicRepository.findById(clinic_id).orElseGet(null);
        if (clinic == null){
            throw new NoSuchElementException();
        }

        ArrayList<AppointmentRequest> appointmentRequests = appointmentRequestRepository.getByClinicAndApprovedFalse(clinic);
        ArrayList<AppointmentDTO> appointmentDTOs = new ArrayList<>();
        for (AppointmentRequest app: appointmentRequests){
            appointmentDTOs.add(new AppointmentDTO(app));
        }
        return appointmentDTOs;
    }

    public AppointmentDTO scheduleNewAppointment(AppointmentDTO appointmentDTO) {
        AppointmentRequest appointmentRequest = setAppointmentRequestData(appointmentDTO);

        AppointmentRequest saved = appointmentRequestRepository.save(appointmentRequest);

        return new AppointmentDTO(saved);
    }

    private AppointmentRequest setAppointmentRequestData(AppointmentDTO appointmentDTO){
        AppointmentRequest appointmentRequest = new AppointmentRequest();

        appointmentRequest.setApproved(false);
        appointmentRequest.setStartingDateAndTime(appointmentDTO.getStartingDateAndTime());
        appointmentRequest.setEndingDateAndTime(appointmentDTO.getStartingDateAndTime() + appointmentDTO.getDuration()/1000);
        appointmentRequest.setDuration(appointmentDTO.getDuration());
        appointmentRequest.setPrice(appointmentDTO.getPrice());

        TypeOfExamination type = typeOfExaminationRepository.findById(appointmentDTO.getTypeOfExamination().getId()).get();
        appointmentRequest.setTypeOfExamination(type);

        Clinic clinic = clinicRepository.findById(appointmentDTO.getClinic().getId()).get();
        appointmentRequest.setClinic(clinic);

        List<DoctorDTO> doctorDTOS = appointmentDTO.getDoctors();
        if (doctorDTOS.size() != 0){
            Doctor doc = doctorRepository.findById(doctorDTOS.get(0).getId()).get();
            appointmentRequest.setDoctor(doc);
        }

        PatientDTO patientDTO = appointmentDTO.getPatient();
        if (patientDTO != null){
            Patient patient = patientRepository.findById(patientDTO.getId()).get();
            appointmentRequest.setPatient(patient);
        }

        return appointmentRequest;
    }

    public AppointmentDTO approveAppointmentRequest(AppointmentDTO appointmentDTO) throws ValidationException {
        Optional<AppointmentRequest> appointmentRequest = appointmentRequestRepository.findById(appointmentDTO.getId());
        if (!appointmentRequest.isPresent()){
            throw new NoSuchElementException("Appointment request has already been approved or rejected");
        }
        Appointment newAppointment = appointmentService.setAppointmentData(appointmentDTO);
        List<DoctorDTO> doctorDTOS = appointmentDTO.getDoctors();
        Set<Doctor> doctors = new HashSet<>();
        for(DoctorDTO d: doctorDTOS) {
            Optional<Doctor> doctor = doctorRepository.findById(d.getId());
            if (!doctor.isPresent()){
                throw new ValidationException("Invalid doctors data");
            }
            if (!doctorService.isAvailable(null, doctor.get(),
                    newAppointment.getStartingDateAndTime(), newAppointment.getDuration())){
                throw new ValidationException("Doctor " + doctor.get().getName() + " " + doctor.get().getSurname()  + " is not available at selected time");
            }
            if (!doctorService.isDuringDoctorWorkingHours(null,doctor.get(),
                    newAppointment.getStartingDateAndTime(), newAppointment.getDuration())){
                throw new ValidationException("Selected time is not during working hours of doctor " + doctor.get().getName() + " " + doctor.get().getSurname());
            }
            doctors.add(doctor.get());
        }
        if (!ordinationService.isAvailable(null, newAppointment.getOrdination(),newAppointment.getStartingDateAndTime(), newAppointment.getDuration())){
            throw new ValidationException("Ordination is not available at selected time");
        }
        Optional<Patient> patient = patientRepository.findById(appointmentDTO.getPatient().getId());
        if (!patient.isPresent()){
            throw new ValidationException("Invalid appointment request data: patient is missing");
        }
        newAppointment.setPatient(patient.get());
        newAppointment.setDoctors(doctors);
        Appointment saved = appointmentService.save(newAppointment);
        saved.getPatient().getPendingAppointments().add(saved);
        patientRepository.save(saved.getPatient());
        appointmentRequestRepository.delete(appointmentRequest.get());

        return new AppointmentDTO(saved);
    }

//    @Transactional
    @Scheduled(cron = "${appointment.cron}")
    void systemChooseOrdinationForAllAppointmentRequests() throws InterruptedException {
        ArrayList<AppointmentRequest> appointmentRequests = appointmentRequestRepository.getAllByApprovedFalse();
        for(AppointmentRequest request: appointmentRequests){
            Patient patient = request.getPatient();
            if (patient == null){
                throw new ValidationException("Invalid appointment request data: patient is missing");
            }

            if (request.getEndingDateAndTime() == 0){
                if (request.getTypeOfExamination().isOperation()){
                    request.setEndingDateAndTime( request.getStartingDateAndTime() + 60 * 60 );
                    request.setDuration(60 * 60 * 1000);
                } else {
                    request.setEndingDateAndTime( request.getStartingDateAndTime() + 20 * 60 );
                    request.setDuration(20 * 60 * 1000);
                }
            }
            ArrayList<Ordination> ordinations = ordinationRepository.getAllByClinic(request.getClinic());
            Ordination selectedOrdination = null;
            for(int i = 0; i < 500; i++){
                request.setStartingDateAndTime(request.getStartingDateAndTime() + request.getDuration()/1000 * i );
                request.setEndingDateAndTime(request.getEndingDateAndTime() + request.getDuration()/1000 * i );

                Optional<Doctor> doctor = doctorRepository.findById(request.getDoctor().getId());
                if (!doctor.isPresent()){
                    throw new ValidationException("Invalid appointment request data: doctor is missing");
                }
                if (!doctorService.isAvailable(null, doctor.get(),
                        request.getStartingDateAndTime(), request.getDuration())){
                    continue;
                }
                if (!doctorService.isDuringDoctorWorkingHours(null,doctor.get(),
                        request.getStartingDateAndTime(), request.getDuration())){
                    continue;
                }

                for(Ordination ordination: ordinations){
                    if (ordinationService.isAvailable(null, ordination, request.getStartingDateAndTime(), request.getDuration())){
                        selectedOrdination = ordination;
                        break;
                    }
                }
                if (selectedOrdination != null){
                    break;
                }
            }
            if (selectedOrdination == null){
                System.out.println("Needs administrator's review<");
                continue;
            }

            Appointment appointment = new Appointment();
            appointment.setStartingDateAndTime(request.getStartingDateAndTime());
            appointment.setEndingDateAndTime(request.getStartingDateAndTime() + request.getDuration()/1000);
            appointment.setDuration(request.getDuration());
            appointment.setPrice(request.getPrice());
            appointment.setCompleted(false);
            appointment.setTypeOfExamination(request.getTypeOfExamination());
            appointment.setClinic(request.getClinic());
            appointment.setOrdination(selectedOrdination);
            appointment.setPatient(request.getPatient());
            Set<Doctor> doctors = new HashSet<>();
            doctors.add(request.getDoctor());
            appointment.setDoctors(doctors);

            Appointment saved = appointmentService.save(appointment);
            Optional<Patient> pat = patientRepository.findById(saved.getPatient().getId());
            if (!pat.isPresent()){
                throw new ValidationException("Invalid appointment request data: patient is invalid");
            }
            pat.get().getPendingAppointments().add(saved);
            patientRepository.save(pat.get());

            request.setApproved(true);
            appointmentRequestRepository.delete(request);
            emailService.sendAppointmentRequestApproved(new AppointmentDTO(saved));
        }
    }
}
