package com.project.tim49.Repository;

import com.project.tim49.Model.ClinicAdministrator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicAdministratorRepository extends JpaRepository<ClinicAdministrator, Long> {

    ClinicAdministrator findOneByEmail(String email);

}
