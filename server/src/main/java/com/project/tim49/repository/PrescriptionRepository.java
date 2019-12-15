package com.project.tim49.repository;

import com.project.tim49.model.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

    @Query("select prescription from Prescription prescription where " +
            "(?1 is null or upper(prescription.performs.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(prescription.performs.surname) like concat('%', upper(?2), '%')) " +
            "and (?3 is null or upper(prescription.medication.name) like concat('%', upper(?3), '%')) " +
            "and (prescription.clinic.id = ?4)")
    List<Prescription> getByQuery(String name, String surname, String medication, Long clinic_id);
}
