package com.project.tim49.repository;

import com.project.tim49.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    @Query("select doctor from Doctor doctor where " +
            "(?1 is null or upper(doctor.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(doctor.surname) like concat('%', upper(?2), '%')) " +
            "and (doctor.clinic.id = ?3)")
    List<Doctor> getByQuery(String name, String surname, Long clinic_id);
}
