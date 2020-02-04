package com.project.tim49.service;


import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.ClinicAdministrator;
import com.project.tim49.model.ClinicCenterAdministrator;
import com.project.tim49.model.User;
import com.project.tim49.repository.AuthorityRepository;
import com.project.tim49.repository.ClinicAdministratorRepository;
import com.project.tim49.repository.ClinicCenterAdminRepository;
import com.project.tim49.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ClinicCenterAdminService {

    @Autowired
    private ClinicCenterAdminRepository clinicCenterAdminRepository;
    @Autowired
    private AuthorityService authorityService;
    @Autowired
    UserRepository userRepository;
    @Lazy
    @Autowired
    private PasswordEncoder passwordEncoder;
    public UserDTO findById(Long id) {

        User user = clinicCenterAdminRepository.findById(id).orElse(null);
        UserDTO userDTO=null;
        if(user!= null){
            userDTO = new UserDTO(user);
        }
        return userDTO;
    }

//    public ClinicAdministrator findOneByEmail(String email) {
//        return clinicCenterAdminRepository.findOneByEmail(email);
//    }

    public List<UserDTO> findAll() {
        List<ClinicCenterAdministrator> admins = clinicCenterAdminRepository.findAll();
        List<UserDTO> adminsDTO = new ArrayList<>();
        for (ClinicCenterAdministrator adminCC: admins) {
            adminsDTO.add(new UserDTO(adminCC));
        }
        return adminsDTO;
    }

    public Page<ClinicCenterAdministrator> findAll(Pageable page) {
        return clinicCenterAdminRepository.findAll(page);
    }

    public ClinicCenterAdministrator save(ClinicCenterAdministrator administrator) {
        return clinicCenterAdminRepository.save(administrator);
    }

    public void remove(Long id) {
        clinicCenterAdminRepository.deleteById(id);
    }
    public void changeAdminKc(UserDTO userDTO){
        User admin = clinicCenterAdminRepository.getOne(userDTO.getId());

        if (admin != null){
            ClinicCenterAdministrator adminKC = getReference(userDTO.getId());
            try {
                adminKC.setName(userDTO.getName());
                adminKC.setSurname(userDTO.getSurname());
                adminKC.setAddress(userDTO.getAddress());
                adminKC.setCity(userDTO.getCity());
                adminKC.setEmail(userDTO.getEmail());
                adminKC.setPhoneNumber(userDTO.getPhoneNumber());
                adminKC.setState(userDTO.getState());
                adminKC.setUpin(userDTO.getUpin());

                clinicCenterAdminRepository.save(adminKC);
            } catch (EntityNotFoundException e) {
                throw new ValidationException("Administrator does not exist!");
            }
        }else{
            throw new ValidationException("Administrator does not exist!");
        }
    }
    // Returns reference to update entity
    public ClinicCenterAdministrator getReference(Long id){
        return clinicCenterAdminRepository.getOne(id);
    }
    public UserDTO addAdmin(UserDTO admin){
        User user = clinicCenterAdminRepository.findOneByEmail(admin.getEmail());
        if (user != null){
            throw new ValidationException("User with this email already exists!");
        }

        ClinicCenterAdministrator adminCC = new ClinicCenterAdministrator();
        adminDTOtoReal(adminCC,admin);
        adminCC.setAuthorities( authorityService.findByname("ADMINCC"));
        adminCC.setPassword(passwordEncoder.encode("123456"));
        adminCC.setPasswordChanged(false);
        adminCC.setEnabled(true);
        clinicCenterAdminRepository.save(adminCC);
        return admin;
    }

    public void adminDTOtoReal(ClinicCenterAdministrator real, UserDTO dto){
        real.setEmail(dto.getEmail());
        real.setName(dto.getName());
        real.setSurname(dto.getSurname());
        real.setAddress(dto.getAddress());
        real.setCity(dto.getCity());
        real.setState(dto.getState());
        real.setPhoneNumber(dto.getPhoneNumber());
        real.setUpin(dto.getUpin());
    }
}
