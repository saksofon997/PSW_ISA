package com.project.tim49.service;

import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.ClinicAdministrator;
import com.project.tim49.model.User;
import com.project.tim49.repository.ClinicAdministratorRepository;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ClinicAdministratorService {

    @Autowired
    private ClinicAdministratorRepository clinicAdministratorRepository;
    @Autowired
    private ClinicService clinicService;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private LoginRepository userRepository;
    @Autowired
    private AuthorityService authorityService;

    public void createNewClinicAdministrator(ClinicAdministratorDTO clinicAdministratorDTO){
        if (clinicAdministratorDTO.getClinic_id() == null){
            throw new ValidationException("Invalid clinic ID!");
        }

        Optional<Clinic> clinic = clinicRepository.findById(clinicAdministratorDTO.getClinic_id());
        if (!clinic.isPresent()){
            throw new NoSuchElementException("No clinic with that ID!");
        }

        User user = userRepository.findOneByEmail(clinicAdministratorDTO.getEmail());
        if (user != null){
            throw new ValidationException("User with this email already exists!");
        }

        ClinicAdministrator admin = new ClinicAdministrator();

        adminDTOtoReal(admin, clinicAdministratorDTO);
        admin.setClinic(clinic.get());
        admin.setAuthorities( authorityService.findByname("ADMINCC") );
        admin.setPassword("TEMPPASS");
        admin.setPasswordChanged(false);

        clinicAdministratorRepository.save(admin);
    }

    public void deleteClinicAdministrator(Long id){
        Optional<ClinicAdministrator> admin = clinicAdministratorRepository.findById(id);
        if (!admin.isPresent()){
            throw new ValidationException("No clinic administrator with that ID!");
        }

        clinicAdministratorRepository.delete(admin.get());
    }

    public ClinicAdministratorDTO changeClinicAdministratorData(ClinicAdministratorDTO dto){
        ClinicAdministrator admin = getReference(dto.getClinic_id());
        try {
            admin.setName(dto.getName());
        } catch (Exception e){
            throw new NoSuchElementException();
        }

        adminDTOtoReal(admin, dto);

        Clinic clinic = clinicService.findOne(dto.getClinic_id());
        if (clinic == null){
            throw new ValidationException();
        }

        admin.setClinic(clinic);
        clinicAdministratorRepository.save(admin);

        return new ClinicAdministratorDTO(admin);
    }

    public void adminDTOtoReal(ClinicAdministrator real, ClinicAdministratorDTO dto){
        real.setEmail(dto.getEmail());
        real.setName(dto.getName());
        real.setSurname(dto.getSurname());
        real.setAddress(dto.getAddress());
        real.setCity(dto.getCity());
        real.setState(dto.getState());
        real.setPhoneNumber(dto.getPhoneNumber());
        real.setUpin(dto.getUpin());
    }


    public List<ClinicAdministratorDTO> findAll() {
        List<ClinicAdministrator> clinicAdmins =  clinicAdministratorRepository.findAll();
        List<ClinicAdministratorDTO> clinicAdminsDTO = new ArrayList<ClinicAdministratorDTO>();
        for (ClinicAdministrator admin : clinicAdmins) {
            clinicAdminsDTO.add(new ClinicAdministratorDTO(admin));
        }
        return clinicAdminsDTO;
    }

    public Page<ClinicAdministrator> findAll(Pageable page) {
        return clinicAdministratorRepository.findAll(page);
    }

    public ClinicAdministrator save(ClinicAdministrator administrator) {
        return clinicAdministratorRepository.save(administrator);
    }

    // Returns reference to update entity
    public ClinicAdministrator getReference(Long id){
        return clinicAdministratorRepository.getOne(id);
    }

    public ClinicAdministratorDTO findById(Long id){
        ClinicAdministrator adminC = clinicAdministratorRepository.findById(id).orElse(null);
        ClinicAdministratorDTO adminCDTO = null;
        if(adminC != null ){
            adminCDTO = new ClinicAdministratorDTO(adminC);
        }
        return adminCDTO;
    }

}
