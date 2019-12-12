package com.project.tim49.service;

import com.project.tim49.dto.PrescriptionDTO;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.Nurse;
import com.project.tim49.model.Prescription;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.NurseRepository;
import com.project.tim49.repository.PrescriptionRepository;
import com.project.tim49.repository.TypeOfExaminationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Validation;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {

    @Autowired
    PrescriptionRepository prescriptionRepository;

    @Autowired
    ClinicRepository clinicRepository;

    @Autowired
    NurseRepository nurseRepository;

    public List<PrescriptionDTO> findAll(Long clinic_id) {
        if(clinic_id == null)
            throw new ValidationException("Invalid clinic ID!");

        Clinic clinic =clinicRepository.getOne(clinic_id);

        if(clinic == null)
            throw new ValidationException("Invalid clinic!");

        List<PrescriptionDTO> prescriptionDTOS = new ArrayList<>();

        clinic.getPrescriptions().forEach(n -> {if(!n.isApproved()) prescriptionDTOS.add(new PrescriptionDTO(n));});

        System.out.println("ovde");

        return prescriptionDTOS;
    }

    public PrescriptionDTO approvePrescription(PrescriptionDTO prescriptionDTO, Long nurse_id) {
        if(prescriptionDTO == null)
            throw new ValidationException("Invalid prescription ID!");

        Prescription prescription = prescriptionRepository.getOne(prescriptionDTO.getId());

        Optional<Nurse> nurse = nurseRepository.findById(nurse_id);

        if(!nurse.isPresent())
            throw new ValidationException("Nurse not found!");

        if(prescription == null)
            throw new ValidationException("Invalid prescription!");

        prescription.setApproved(true);
        prescription.setApproves(nurse.get());

        prescriptionRepository.save(prescription);

        return new PrescriptionDTO(prescription);
    }
}
