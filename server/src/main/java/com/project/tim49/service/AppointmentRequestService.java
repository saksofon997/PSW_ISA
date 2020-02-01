package com.project.tim49.service;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.dto.PatientDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.*;

@Service
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
                throw new ValidationException("Doctor " + doctor.get().getName() + " " + doctor.get().getSurname()  + "is not available at selected time");
            }
            if (!doctorService.isDuringDoctorWorkingHours(null,doctor.get(),
                    newAppointment.getStartingDateAndTime(), newAppointment.getDuration())){
                throw new ValidationException("Selected time is not during doctors working hours");
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
}
