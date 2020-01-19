package com.project.tim49.repository;

import com.project.tim49.model.Clinic;
import com.project.tim49.model.ClinicPatient;
import com.project.tim49.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClinicPatientRepository extends JpaRepository<ClinicPatient, Long> {

    @Query("select clinicPatient from ClinicPatient clinicPatient where " +
            "clinicPatient.clinic.id = ?1 " +
            "and clinicPatient.patient.id = ?2")
    ClinicPatient getByClinicAndPatient(Long clinic_id, Long patient_id);
}
