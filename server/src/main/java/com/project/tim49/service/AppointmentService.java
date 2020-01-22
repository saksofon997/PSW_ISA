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
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private TypeOfExaminationRepository typeOfExaminationRepository;
    @Autowired
    private OrdinationRepository ordinationRepository;
    @Autowired
    private PatientRepository patientRepository;

    public ArrayList<AppointmentDTO> getClinicAvailableAppointments(Long clinic_id){
        Clinic clinic = clinicRepository.findById(clinic_id).orElseGet(null);
        if (clinic == null){
            throw new NoSuchElementException();
        }

        ArrayList<Appointment> appointments = appointmentRepository.getByClinicAndPatientNullAndDeletedFalse(clinic);
        ArrayList<AppointmentDTO> appointmentDTOs = new ArrayList<>();
        for (Appointment app: appointments){
            appointmentDTOs.add(new AppointmentDTO(app));
        }
        return appointmentDTOs;
    }

    public AppointmentDTO startAppointment(AppointmentDTO appointmentDTO) {
        Appointment appointment = setAppointmentData(appointmentDTO);

        Patient patient = patientRepository.findById(appointmentDTO.getPatient().getId()).get();
        appointment.setPatient(patient);

        Appointment saved = appointmentRepository.save(appointment);

        patient.getPendingAppointments().add(saved);
        patientRepository.save(patient);
        return new AppointmentDTO(saved);
    }

    public void createAvailableAppointment(AppointmentDTO appointmentDTO) {
        Appointment appointment = setAppointmentData(appointmentDTO);
        appointment.setPatient(null);

        appointmentRepository.save(appointment);
    }

    private Appointment setAppointmentData(AppointmentDTO appointmentDTO){
        Appointment appointment = new Appointment();

        appointment.setStartingDateAndTime(appointmentDTO.getStartingDateAndTime());
        appointment.setEndingDateAndTime(appointmentDTO.getStartingDateAndTime() + appointmentDTO.getDuration()/1000);
        appointment.setDuration(appointmentDTO.getDuration());
        appointment.setPrice(appointmentDTO.getPrice());
        appointment.setCompleted(false);

        TypeOfExamination type = typeOfExaminationRepository.findById(appointmentDTO.getTypeOfExamination().getId()).get();
        appointment.setTypeOfExamination(type);

        Clinic clinic = clinicRepository.findById(appointmentDTO.getClinic().getId()).get();
        appointment.setClinic(clinic);

        Ordination ordination = ordinationRepository.findById(appointmentDTO.getOrdination().getId()).get();
        appointment.setOrdination(ordination);

        List<DoctorDTO> doctorDTOS = appointmentDTO.getDoctors();
        Set<Doctor> doctors = new HashSet<>();
        for(DoctorDTO d: doctorDTOS) {
            Doctor doc = doctorRepository.findById(d.getId()).get();
            doctors.add(doc);
        }
        appointment.setDoctors(doctors);

        return appointment;
    }

    public void deleteAppointment(Long id) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if (!appointment.isPresent()) {
            throw new ValidationException("No appointment with that ID!");
        }
        Appointment forDelete = getReference(id);
        try {
            forDelete.setDeleted(true);
            appointmentRepository.save(forDelete);
        } catch (Exception e) {
            throw new NoSuchElementException();
        }
    }

    private Appointment getReference(Long id) {
        return appointmentRepository.getOne(id);
    }
}
