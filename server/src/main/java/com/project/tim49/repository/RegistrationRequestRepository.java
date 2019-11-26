package com.project.tim49.repository;

import com.project.tim49.model.RegistrationRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRequestRepository extends JpaRepository<RegistrationRequest, Long> {
}
