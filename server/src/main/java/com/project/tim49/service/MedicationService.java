package com.project.tim49.service;

import com.project.tim49.dto.MedicationDTO;
import com.project.tim49.model.MedicationDictionary;
import com.project.tim49.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    public MedicationDTO createNewMedication(MedicationDTO medicationDTO){
        MedicationDictionary medication = medicationRepository.findOneByCode(medicationDTO.getCode());
        if (medication != null){
            throw new ValidationException("Medication with this code already exists!");
        }

        medication = new MedicationDictionary();
        medication.setCode(medicationDTO.getCode());
        medication.setName(medicationDTO.getName());
        medicationRepository.save(medication);

        return medicationDTO;
    }

    public void deleteMedication(Long id){
        Optional<MedicationDictionary> admin = medicationRepository.findById(id);
        if (!admin.isPresent()){
            throw new ValidationException("No medication with that ID!");
        }

        medicationRepository.delete(admin.get());
    }

    public MedicationDTO changeMedicationData(MedicationDTO dto){
        MedicationDictionary medication = getReference(dto.getId());
        try {
            MedicationDictionary codeCheck = medicationRepository.findOneByCode(dto.getCode());
            if (medication != null){
                throw new ValidationException("Medication with this code already exists!");
            }

            medication.setCode(dto.getCode());
            medication.setName(dto.getName());

            medicationRepository.save(medication);

            return new MedicationDTO(medication);
        } catch (Exception e){
            throw new NoSuchElementException();
        }
    }

    public MedicationDictionary getReference(Long id){
        return medicationRepository.getOne(id);
    }

    public List<MedicationDictionary> findAll(){
        return medicationRepository.findAll();
    }
}
