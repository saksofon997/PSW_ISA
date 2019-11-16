package com.project.tim49.Repository;

import com.project.tim49.Model.MedicationDictionary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicationRepository extends JpaRepository<MedicationDictionary, Long> {

    MedicationDictionary findOneByCode(String code);

}
