package com.project.tim49.repository;

import com.project.tim49.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    @Query("select appointment from Appointment appointment where " +
            "(appointment.completed) = false " +
            "and (appointment.ordination.id = ?1)")
    List<Appointment> getByOrdinationAndNotCompleted(Long ordination_id);
}
