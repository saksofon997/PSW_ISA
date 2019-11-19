package com.project.tim49.service;

import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.model.ClinicAdministrator;
import com.project.tim49.repository.ClinicAdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClinicAdministratorService {

    @Autowired
    private ClinicAdministratorRepository clinicAdministratorRepository;

    public ClinicAdministrator findById(Long id) {
        return clinicAdministratorRepository.findById(id).orElse(null);
    }

    public ClinicAdministrator findOneByEmail(String email) {
        return clinicAdministratorRepository.findOneByEmail(email);
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

    public void remove(Long id) {
        clinicAdministratorRepository.deleteById(id);
    }

    // Returns reference to update entity
    public ClinicAdministrator getReference(Long id){
        return clinicAdministratorRepository.getOne(id);
    }

}
