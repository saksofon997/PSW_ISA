package com.project.tim49.service;

import com.project.tim49.dto.DiagnosisDTO;
import com.project.tim49.model.DiagnosisDictionary;
import com.project.tim49.repository.DiagnosisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.List;
import java.util.Optional;

@Service
public class DiagnosisService {

    @Autowired
    private DiagnosisRepository diagnosisRepository;

    public DiagnosisDTO createNewDiagnosis(DiagnosisDTO diagnosisDTO) {
        DiagnosisDictionary diagnosis =
                diagnosisRepository.findOneByCode(diagnosisDTO.getCode());
        if(diagnosis == null) {
            diagnosis = new DiagnosisDictionary();
            diagnosis.setCode(diagnosisDTO.getCode());
            diagnosis.setDescription(diagnosisDTO.getDescription());
            diagnosisRepository.save(diagnosis);

            return diagnosisDTO;
        }
        throw new ValidationException("Diagnosis with this code already " +
                "exists!");
    }

    public void deleteDiagnosis(Long id) {
        Optional<DiagnosisDictionary> diagnosis =
                diagnosisRepository.findById(id);
        if(!diagnosis.isPresent()) {
            throw new ValidationException("Diagnosis doesn't exist!");
        }
        diagnosisRepository.delete(diagnosis.get());
    }

    public DiagnosisDTO changeDiagnosisData(DiagnosisDTO diagnosisDTO) {
        DiagnosisDictionary temp =
                diagnosisRepository.findOneByCode(diagnosisDTO.getCode());
        if(temp != null && temp.getId() != diagnosisDTO.getId()) {
            throw new ValidationException("Diagnosis with this code already " +
                    "exists!");
        }

        DiagnosisDictionary forChange = getReference(diagnosisDTO.getId());
        try{
            forChange.setDescription(diagnosisDTO.getDescription());
            forChange.setCode(diagnosisDTO.getCode());
            diagnosisRepository.save(forChange);

            return new DiagnosisDTO(forChange);
        }catch(EntityNotFoundException e){
            throw new ValidationException("Diagnose does not exist!");
        }
    }

    public List<DiagnosisDictionary> findAll() {
        return diagnosisRepository.findAll();
    }

    public DiagnosisDictionary findOne(String code) {
        return diagnosisRepository.findOneByCode(code);
    }

    public DiagnosisDictionary getReference(Long id) {
        return diagnosisRepository.getOne(id);
    }

}
