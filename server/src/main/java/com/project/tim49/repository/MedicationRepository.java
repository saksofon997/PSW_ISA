package com.project.tim49.repository;

import com.project.tim49.model.MedicationDictionary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicationRepository extends JpaRepository<MedicationDictionary, Long> {

    MedicationDictionary findOneByCode(String code);

}
