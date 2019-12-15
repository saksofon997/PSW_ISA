package com.project.tim49.service;

import com.project.tim49.dto.MedicationDTO;
import com.project.tim49.model.MedicationDictionary;
import com.project.tim49.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    public MedicationDTO createNewMedication(MedicationDTO medicationDTO) {
        MedicationDictionary medication = medicationRepository.findOneByCode(medicationDTO.getCode());
        if (medication != null) {
            throw new ValidationException("Medication with this code already exists!");
        }

        medication = new MedicationDictionary();
        medication.setCode(medicationDTO.getCode());
        medication.setName(medicationDTO.getName());
        medicationRepository.save(medication);

        return medicationDTO;
    }

    public void deleteMedication(Long id) {
        Optional<MedicationDictionary> medication = medicationRepository.findById(id);
        if (!medication.isPresent()) {
            throw new ValidationException("No medication with that ID!");
        }
        MedicationDictionary medicationDictionary = getReference(id);
        try {
            medicationDictionary.setDeleted(true);
            medicationRepository.save(medicationDictionary);
        } catch (Exception e) {
            throw new NoSuchElementException();
        }
    }

    public MedicationDTO changeMedicationData(MedicationDTO dto) {
        MedicationDictionary codeCheck = medicationRepository.findOneByCode(dto.getCode());
        if (codeCheck != null && codeCheck.getId() != dto.getId()) {
            throw new ValidationException("Medication with this code already exists!");
        }

        MedicationDictionary medication = getReference(dto.getId());
        try {
            medication.setName(dto.getName());
            medication.setCode(dto.getCode());

            medicationRepository.save(medication);

            return new MedicationDTO(medication);
        } catch (Exception e) {
            throw new NoSuchElementException();
        }
    }

    public MedicationDictionary getReference(Long id) {
        return medicationRepository.getOne(id);
    }

    public List<MedicationDTO> findAll() {
        List<MedicationDTO> medicationDTOS = new ArrayList<>();
         medicationRepository.findAll().forEach(n -> {if(!n.isDeleted()) medicationDTOS.add(new MedicationDTO(n));});
         return medicationDTOS;
    }
}
