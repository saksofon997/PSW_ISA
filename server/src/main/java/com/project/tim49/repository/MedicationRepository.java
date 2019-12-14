package com.project.tim49.repository;

import com.project.tim49.model.MedicationDictionary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MedicationRepository extends JpaRepository<MedicationDictionary, Long> {

    MedicationDictionary findOneByCode(String code);

//    @Query("select medication_dictionary from MedicationDictionary medication_dictionary where " +
//            "(?1 is null or upper(medication_dictionary.name) like concat('%', upper(?1), '%')) " +
//            "and (medication_dictionary.clinic.id = ?2)")
//    List<MedicationDictionary> getByQuery(String name, Long clinic_id);

}
