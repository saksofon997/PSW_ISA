package com.project.tim49.repository;

import com.project.tim49.model.DiagnosisDictionary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiagnosisRepository extends JpaRepository<DiagnosisDictionary, Long> {

    DiagnosisDictionary findOneByCode(String code);

    DiagnosisDictionary getOneByCode(String code);
}
