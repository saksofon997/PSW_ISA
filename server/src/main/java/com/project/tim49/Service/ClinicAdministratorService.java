package com.project.tim49.Service;

import com.project.tim49.Model.ClinicAdministrator;
import com.project.tim49.Repository.ClinicAdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public List<ClinicAdministrator> findAll() {
        return clinicAdministratorRepository.findAll();
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
}
