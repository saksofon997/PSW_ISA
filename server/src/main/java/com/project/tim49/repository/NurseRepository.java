package com.project.tim49.repository;

import com.project.tim49.model.Nurse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NurseRepository extends JpaRepository<Nurse, Long> {

    @Query("select nurse from Nurse nurse where " +
            "(nurse.enabled = true)" +
            "and (?1 is null or upper(nurse.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(nurse.surname) like concat('%', upper(?2), '%')) " +
            "and (nurse.clinic.id = ?3)")
    List<Nurse> getByQuery(String name, String surname, Long clinic_id);
}
