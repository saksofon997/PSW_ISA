package com.project.tim49.repository;

import com.project.tim49.model.AppointmentRequest;
import com.project.tim49.model.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.ArrayList;
import java.util.List;

public interface AppointmentRequestRepository extends JpaRepository<AppointmentRequest, Long> {

    ArrayList<AppointmentRequest> getByClinicAndApprovedFalse(Clinic clinic);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value ="0")})
    ArrayList<AppointmentRequest> getAllByApprovedFalse();

    @Query("select request from AppointmentRequest request where " +
            "(request.approved) = false " +
            "and (request.doctor.id = ?3) " +
            "and (request.startingDateAndTime >= ?1) " +
            "and (request.startingDateAndTime < ?2)")
    List<AppointmentRequest> getByTimesAndDoctor(long startTimestamp, long endTimestamp, Long doctor_id);
}
