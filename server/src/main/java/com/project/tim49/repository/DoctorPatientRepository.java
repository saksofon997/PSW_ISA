package com.project.tim49.repository;

import com.project.tim49.model.DoctorPatient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DoctorPatientRepository extends JpaRepository<DoctorPatient, Long> {

    @Query("select doctorPatient from DoctorPatient doctorPatient where " +
            "doctorPatient.doctor.id = ?1 " +
            "and doctorPatient.patient.id = ?2")
    DoctorPatient getByDoctorAndPatient(Long doctor_id, Long patient_id);
}
