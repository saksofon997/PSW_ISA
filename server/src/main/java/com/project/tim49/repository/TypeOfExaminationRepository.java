package com.project.tim49.repository;

import com.project.tim49.model.TypeOfExamination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeOfExaminationRepository extends JpaRepository<TypeOfExamination, Long> {

    @Query("select type from TypeOfExamination type where " +
            "(?1 is null or upper(type.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or type.price >= ?2) " +
            "and (?3 is null or type.price <= ?3)" +
            "and (type.clinic_id.id = ?4)")
    List<TypeOfExamination> getByQuery(String name, Float minPrice, Float maxPrice, Long clinic_id);
}
