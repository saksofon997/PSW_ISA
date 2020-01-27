package com.project.tim49.repository;

import com.project.tim49.model.AppointmentRequest;
import com.project.tim49.model.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface AppointmentRequestRepository extends JpaRepository<AppointmentRequest, Long> {

    ArrayList<AppointmentRequest> getByClinicAndApprovedFalse(Clinic clinic);
}
