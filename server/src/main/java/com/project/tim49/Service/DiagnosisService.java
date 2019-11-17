package com.project.tim49.Service;

import com.project.tim49.Dto.DiagnosisDTO;
import com.project.tim49.Model.Clinic;
import com.project.tim49.Model.DiagnosisDictionary;
import com.project.tim49.Repository.DiagnosisRepository;
import com.project.tim49.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public boolean changeDiagnosisData(DiagnosisDictionary zaIzmenu, DiagnosisDTO diagnosisDTO) {
        if(zaIzmenu != null && diagnosisDTO != null) {

            zaIzmenu.setDescription(diagnosisDTO.getDescription());
            zaIzmenu.setCode(diagnosisDTO.getCode());
            return true;
        }
        else
            return false;
    }
}
