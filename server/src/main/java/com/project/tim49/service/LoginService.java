package com.project.tim49.service;

import com.project.tim49.model.User;
import com.project.tim49.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public User findOne(String email) {
        return loginRepository.findOneByEmail(email);
    }

    public List<User> findAll() {
        return loginRepository.findAll();
    }

    public Page<User> findAll(Pageable page) {
        return loginRepository.findAll(page);
    }

    public List<User> findByLastName(String email) {
        return loginRepository.findAllByEmail(email);
    }

    public List<User> findByNameAndSurname(String firstName, String lastName) {
        return loginRepository.findByNameAndSurnameAllIgnoringCase(firstName, lastName);
    }

}
