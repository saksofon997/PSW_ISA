package com.project.tim49.service;

import com.project.tim49.dto.*;
import com.project.tim49.model.*;
import com.project.tim49.repository.AppointmentRepository;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.DoctorRepository;
import com.project.tim49.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.MethodNotAllowedException;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;

    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    ClinicRepository clinicRepository;

    @Autowired
    AppointmentRepository appointmentRepository;

    public UserDTO findById(Long id) {

        User user = patientRepository.findById(id).orElse(null);
        UserDTO userDTO=null;
        if(user!= null){
            userDTO = new UserDTO(user);
        }
        return userDTO;
    }
    public void changePatient(UserDTO userDTO){
        User admin = patientRepository.getOne(userDTO.getId());

        if (admin != null){
            Patient patient = getReference(userDTO.getId());
            try {
                patient.setName(userDTO.getName());
                patient.setSurname(userDTO.getSurname());
                patient.setAddress(userDTO.getAddress());
                patient.setCity(userDTO.getCity());
                patient.setEmail(userDTO.getEmail());
                patient.setPhoneNumber(userDTO.getPhoneNumber());
                patient.setState(userDTO.getState());
                patient.setUpin(userDTO.getUpin());

                patientRepository.save(patient);
            } catch (EntityNotFoundException e) {
                throw new ValidationException("Patient does not exist!");
            }
        }else{
            throw new ValidationException("Patient does not exist!");
        }
    }

    public List<AppointmentDTO> getPendingAppointments(Long patient_id){
        Optional<Patient> patient = patientRepository.findById(patient_id);

        if (!patient.isPresent()){
            throw new ValidationException("Patient does not exist!");
        }

        Set<Appointment> pendingAppointments = patient.get().getPendingAppointments();
        List<AppointmentDTO> appointmentDTOS = new ArrayList<>();
        for(Appointment app: pendingAppointments) {
            if (!app.isDeleted()){
                AppointmentDTO appDTO = new AppointmentDTO(app);
                appointmentDTOS.add(appDTO);
            }
        }
        return appointmentDTOS;
    }

    // Returns reference to update entity
    public Patient getReference(Long id){
        return patientRepository.getOne(id);
    }
    public List<PatientDTO> getClinicPatients(Long id){
        if (id== null){
            throw  new ValidationException("Clinic not recognized.");
        }
        Clinic clinic = clinicRepository.findById(id).orElse(null);
        if (clinic == null ) {
            throw new ValidationException("Clinic for this doctor does not exist.");
        }
        Set<ClinicPatient> patients = clinic.getPatients();
        List<PatientDTO> patientDTOS = new ArrayList<>();
        for (ClinicPatient clinicPatient: patients) {
            patientDTOS.add(new PatientDTO(clinicPatient.getPatient()));
        }
        return patientDTOS;
    }


    public List<PatientDTO> getByQuery(String name, String surname, String upin, Long clinicID) {
        if(clinicID == null) {
            throw new ValidationException("Clinic id is missing!");
        }
        List<Patient> patients = patientRepository.getByQuery(name, surname, upin);
        List<PatientDTO> patientDTOS = new ArrayList<>();

        for(Patient p: patients) {
            Set<ClinicPatient> patientsClinics = p.getClinics();
            for(ClinicPatient cp : patientsClinics) {
                if(cp.clinic.getId().equals(clinicID)) {
                    PatientDTO patientDTO = new PatientDTO(p);
                    patientDTOS.add(patientDTO);
                }
            }
        }
        return patientDTOS;
    }

    public MedicalRecordDTO getMedicalRecord(Long id){
        if (id== null){
            throw  new ValidationException("Patient not recognized.");
        }
        Patient patient = patientRepository.findById(id).orElse(null);
        if (patient == null ) {
            throw new ValidationException("Patient does not exist.");
        }
        MedicalRecord medicalRecord = patient.getMedicalRecord();
        if (medicalRecord == null){
            throw new ValidationException("Medical record does not exist.");
        }
        MedicalRecordDTO medicalRecordDTO = new MedicalRecordDTO(medicalRecord);

        return medicalRecordDTO;
    }
    public AppointmentDTO cancelAppointment(Long patientID, Long appointmentID,Long currentTime){
        Patient patient = patientRepository.getOne(patientID);
        Set<Appointment> appointments = patient.getPendingAppointments();
        Appointment appointment = appointmentRepository.getOne(appointmentID);
        if (appointment.getPatient() == null) {
            throw new ValidationException("Appointment has no patient set.");
        }
        if ((appointment.getStartingDateAndTime()-currentTime)<86400){
            throw new ValidationException("Appointment can be canceled only at least 24h ahead.");
        }
        appointment.setPatient(null);
        patient.getPendingAppointments().remove(appointment);
        patientRepository.save(patient);


        return new AppointmentDTO(appointmentRepository.save(appointment));

    }
}
