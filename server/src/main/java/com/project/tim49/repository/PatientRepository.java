package com.project.tim49.repository;

import com.project.tim49.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    @Query("select patient from Patient patient where " +
            "(?1 is null or upper(patient.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(patient.surname) like concat('%', upper(?2), '%')) " +
            "and (?3 is null or upper(patient.upin) like concat('%', upper(?3), '%')) ")
    List<Patient> getByQuery(String name, String surname, String upin);
}
