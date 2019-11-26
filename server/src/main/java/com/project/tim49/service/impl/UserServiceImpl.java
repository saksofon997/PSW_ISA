package com.project.tim49.service.impl;

import java.util.List;

import com.project.tim49.dto.RegistrationDTO;
import com.project.tim49.model.Authority;
import com.project.tim49.model.RegistrationRequest;
import com.project.tim49.model.User;
import com.project.tim49.model.UserRequest;
import com.project.tim49.repository.RegistrationRequestRepository;
import com.project.tim49.repository.UserRepository;
import com.project.tim49.service.AuthorityService;
import com.project.tim49.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthorityService authService;

    @Autowired
    private RegistrationRequestRepository registrationRequestRepository;

    @Override
    public User findByEmail(String email) throws UsernameNotFoundException {
        User u = userRepository.findByEmail(email);
        return u;
    }

    public User findById(Long id) throws AccessDeniedException {
        User u = userRepository.findById(id).orElseGet(null);
        return u;
    }

    public List<User> findAll() throws AccessDeniedException {
        List<User> result = userRepository.findAll();
        return result;
    }

    @Override
    public User save(UserRequest userRequest) {
        User u = new User();

        u.setEmail(userRequest.getEmail());
        u.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        u.setName(userRequest.getName());
        u.setSurname(userRequest.getSurname());

        //u.setEmail(userRequest.getEmail());

        u.setEnabled(true);

        List<Authority> auth = authService.findByname("ROLE_USER");
        u.setAuthorities(auth);

        u = this.userRepository.save(u);
        return u;
    }

    public RegistrationDTO createRegistrationRequest(RegistrationDTO registrationDTO){
        RegistrationRequest request = new RegistrationRequest();

        request.setEmail(registrationDTO.getEmail());
        request.setPassword(passwordEncoder.encode(registrationDTO.getPassword()));
        request.setName(registrationDTO.getName());
        request.setSurname(registrationDTO.getSurname());
        request.setAddress(registrationDTO.getAddress());
        request.setCity(registrationDTO.getCity());
        request.setState(registrationDTO.getState());
        request.setPhoneNumber(registrationDTO.getPhoneNumber());
        request.setUpin(registrationDTO.getUpin());

        RegistrationRequest saved = this.registrationRequestRepository.save(request);
        return new RegistrationDTO(saved);
    }

}
