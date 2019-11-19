package com.project.tim49.service;

import com.project.tim49.dto.DiagnosisDTO;
import com.project.tim49.model.DiagnosisDictionary;
import com.project.tim49.repository.DiagnosisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.List;

@Service
public class DiagnosisService {

    @Autowired
    private DiagnosisRepository diagnosisRepository;

    public List<DiagnosisDictionary> findAll() {
        return diagnosisRepository.findAll();
    }

    public DiagnosisDictionary findOne(String code) {
        return diagnosisRepository.findOneByCode(code);
    }

    public DiagnosisDictionary save(DiagnosisDictionary diagnosisDictionary) {
        return diagnosisRepository.save(diagnosisDictionary);
    }

    public void remove(Long id) {
        diagnosisRepository.deleteById(id);
    }

    public DiagnosisDictionary getReference(String code) {
        return diagnosisRepository.getOneByCode(code);
    }

    public void changeDiagnosisData( DiagnosisDTO diagnosisDTO) {
        DiagnosisDictionary forChange = getReference(diagnosisDTO.getCode());
        try{
            forChange.setDescription(diagnosisDTO.getDescription());
            forChange.setCode(diagnosisDTO.getCode());
            diagnosisRepository.save(forChange);
        }catch(EntityNotFoundException e){
            throw new ValidationException("Diagnose does not exist!");
        }
    }
}
