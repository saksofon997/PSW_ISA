package com.project.tim49.repository;

import com.project.tim49.model.Appointment;
import com.project.tim49.model.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    @Query("select appointment from Appointment appointment where " +
            "(appointment.completed) = false " +
            "and (appointment.deleted = false) " +
            "and (appointment.ordination.id = ?1)")
    List<Appointment> getByOrdinationAndNotCompleted(Long ordination_id);

    @Query("select appointment from Appointment appointment where " +
            "(appointment.completed) = false " +
            "and (appointment.deleted = false) " +
            "and (appointment.startingDateAndTime >= ?1) " +
            "and (appointment.startingDateAndTime < ?2)")
    List<Appointment> getByTimesAndNotCompleted(long startTimestamp, long endTimestamp);

    ArrayList<Appointment> getByClinicAndPatientNullAndDeletedFalse(Clinic clinic);

    @Query("select SUM(appointment.price - appointment.discount) from Appointment appointment where " +
            "(appointment.completed) = true " +
            "and (appointment.deleted = false) " +
            "and (appointment.clinic.id = ?3) " +
            "and (appointment.endingDateAndTime >= ?1) " +
            "and (appointment.endingDateAndTime <= ?2)")
    Float getSumOfPricesInDesiredPeriod(long periodStart, long periodEnd, Long clinic_id);

    @Query("select appointment from Appointment appointment where " +
            "(appointment.completed) = true " +
            "and (appointment.deleted = false) " +
            "and (appointment.clinic.id = ?3) " +
            "and (appointment.endingDateAndTime >= ?1) " +
            "and (appointment.endingDateAndTime <= ?2)")
    List<Appointment> getCompletedByClinicAndDesiredPeriod(long periodStart, long periodEnd, Long clinic_id);
}
