package com.project.tim49.Service;

import com.project.tim49.Model.MedicationDictionary;
import com.project.tim49.Repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    public MedicationDictionary findById(Long id) {
        return medicationRepository.findById(id).orElse(null);
    }

    public List<MedicationDictionary> findAll() {
        return medicationRepository.findAll();
    }

    public MedicationDictionary findOne(String code) {
        return medicationRepository.findOneByCode(code);
    }

    public MedicationDictionary save(MedicationDictionary diagnosisDictionary) {
        return medicationRepository.save(diagnosisDictionary);
    }

    public void remove(Long id) {
        medicationRepository.deleteById(id);
    }

    public MedicationDictionary getReference(Long id){
        return medicationRepository.getOne(id);
    }
}
