package com.project.tim49.repository;

import com.project.tim49.model.ClinicCenterAdministrator;
import com.project.tim49.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicCenterAdminRepository extends JpaRepository<ClinicCenterAdministrator, Long> {

    User findOneByEmail(String email);
}
