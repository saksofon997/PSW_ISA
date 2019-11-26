package com.project.tim49.service;

import com.project.tim49.dto.RegistrationDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.Patient;
import com.project.tim49.model.User;
import com.project.tim49.model.UserRequest;

import java.util.List;

public interface UserService {
    User findById(Long id);
    User findByEmail(String email);
    List<User> findAll ();
    UserDTO createPatient(Long id);
    RegistrationDTO createRegistrationRequest(RegistrationDTO registrationDTO);
}
