package com.project.tim49.repository;

import com.project.tim49.model.TypeOfExamination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeOfExaminationRepository extends JpaRepository<TypeOfExamination, Long> {

    TypeOfExamination getByNameAndOperation(String name, boolean operation);
}
