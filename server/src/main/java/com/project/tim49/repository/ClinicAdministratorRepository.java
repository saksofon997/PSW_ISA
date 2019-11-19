package com.project.tim49.repository;

import com.project.tim49.model.ClinicAdministrator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicAdministratorRepository extends JpaRepository<ClinicAdministrator, Long> {

    ClinicAdministrator findOneByEmail(String email);

}
