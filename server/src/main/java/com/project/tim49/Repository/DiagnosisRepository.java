package com.project.tim49.Repository;

import com.project.tim49.Model.DiagnosisDictionary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiagnosisRepository extends JpaRepository<DiagnosisDictionary, Long> {

    DiagnosisDictionary findOneByCode(String code);
}
