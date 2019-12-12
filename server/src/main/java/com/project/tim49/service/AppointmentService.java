package com.project.tim49.service;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    public Appointment save(AppointmentDTO appointmentDTO) {
        Appointment appointment = new Appointment();

        appointment.setStartingDateAndTime(appointmentDTO.getStartingDateAndTime());
        appointment.setEndingDateAndTime(appointmentDTO.getStartingDateAndTime() + appointmentDTO.getDuration());
        appointment.setDuration(appointmentDTO.getDuration());
        appointment.setPrice(appointmentDTO.getPrice());
        appointment.setCompleted(false);

        TypeOfExamination type = typeOfExaminationRepository.findById(appointmentDTO.getTypeOfExamination().getId()).get();
        appointment.setTypeOfExamination(type);

        Clinic clinic = clinicRepository.findById(appointmentDTO.getClinic().getId()).get();
        appointment.setClinic(clinic);

        Ordination ordination = ordinationRepository.findById(appointmentDTO.getOrdination().getId()).get();
        appointment.setOrdination(ordination);

        Patient patient = patientRepository.findById(appointmentDTO.getPatient().getId()).get();
        appointment.setPatient(patient);

        List<DoctorDTO> doctorDTOS = appointmentDTO.getDoctors();
        Set<Doctor> doctors = new HashSet<>();
        for(DoctorDTO d: doctorDTOS) {
            Doctor doc = doctorRepository.findById(d.getId()).get();
            doctors.add(doc);
        }

        Appointment saved = appointmentRepository.save(appointment);

        patient.getPendingAppointments().add(saved);
        patientRepository.save(patient);
        for (Doctor doc: doctors){
            doc.getAppointments().add(appointment);
            doctorRepository.save(doc);
        }

        return appointment;
    }
}
