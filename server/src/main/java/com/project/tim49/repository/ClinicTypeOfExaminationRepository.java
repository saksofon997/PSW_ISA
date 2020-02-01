package com.project.tim49.repository;

import com.project.tim49.model.Clinic;
import com.project.tim49.model.ClinicTypeOfExamination;
import com.project.tim49.model.TypeOfExamination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClinicTypeOfExaminationRepository extends JpaRepository<ClinicTypeOfExamination, Long> {

    ClinicTypeOfExamination getByClinicAndTypeOfExamination(Clinic clinic, TypeOfExamination typeOfExamination);

    List<ClinicTypeOfExamination> getByClinic(Clinic clinic);

    void deleteByTypeOfExamination(TypeOfExamination typeOfExamination);

    @Query("select cliType from ClinicTypeOfExamination cliType where " +
            "(?1 is null or upper(cliType.typeOfExamination.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or cliType.price >= ?2) " +
            "and (?3 is null or cliType.price <= ?3)" +
            "and (cliType.clinic.id = ?4)")
    List<ClinicTypeOfExamination> getByQuery(String name, Float minPrice, Float maxPrice, Long clinic_id);

}
