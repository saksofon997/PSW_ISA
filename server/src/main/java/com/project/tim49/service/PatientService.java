package com.project.tim49.service;

import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.ClinicCenterAdministrator;
import com.project.tim49.model.Patient;
import com.project.tim49.model.User;
import com.project.tim49.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;

@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;

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
    // Returns reference to update entity
    public Patient getReference(Long id){
        return patientRepository.getOne(id);
    }
}