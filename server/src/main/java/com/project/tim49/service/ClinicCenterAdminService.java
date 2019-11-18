package com.project.tim49.service;


import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.ClinicCenterAdministrator;
import com.project.tim49.model.User;
import com.project.tim49.repository.ClinicCenterAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.List;

@Service
public class ClinicCenterAdminService {

    @Autowired
    private ClinicCenterAdminRepository clinicCenterAdminRepository;

    public UserDTO findById(Long id) {

        User user = clinicCenterAdminRepository.findById(id).orElse(null);
        UserDTO userDTO=null;
        if(user!= null){
            userDTO = new UserDTO(user.getId(),
                                user.getEmail(),
                                user.getName(),
                                user.getSurname(),
                                user.getAddress(),
                                user.getCity(),
                                user.getState(),
                                user.getPhoneNumber(),
                                user.getUpin(),
                                user.getRole());
        }
        return userDTO;
    }

//    public ClinicAdministrator findOneByEmail(String email) {
//        return clinicCenterAdminRepository.findOneByEmail(email);
//    }

    public List<ClinicCenterAdministrator> findAll() {
        return clinicCenterAdminRepository.findAll();
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
}
