package com.project.tim49.repository;

import com.project.tim49.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select doctor from Doctor doctor where doctor.id = ?1")
    @QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value ="0")})
    Doctor findOneByIdAndLock(Long id);

    @Query("select doctor from Doctor doctor where " +
            "(?1 is null or upper(doctor.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(doctor.surname) like concat('%', upper(?2), '%')) " +
            "and (doctor.clinic.id = ?3)")
    List<Doctor> getByQuery(String name, String surname, Long clinic_id);

    @Query("select doctor from Doctor doctor where " +
            "(?1 is null or upper(doctor.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(doctor.surname) like concat('%', upper(?2), '%')) " +
            "and (doctor.clinic.id = ?3)" +
            "and (doctor.specialization.id = ?4)")
    List<Doctor> getByAdvancedQuery(String name, String surname, Long clinic_id, Long toe);
}
