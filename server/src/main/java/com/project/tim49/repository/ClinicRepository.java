package com.project.tim49.repository;

import com.project.tim49.model.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClinicRepository extends JpaRepository<Clinic, Long> {

    @Query("select clinic from Clinic clinic where " +
            "(?1 is null or upper(clinic.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(clinic.address) like concat('%', upper(?2), '%')) ")
    List<Clinic> getByQuery(String name, String address);
}
