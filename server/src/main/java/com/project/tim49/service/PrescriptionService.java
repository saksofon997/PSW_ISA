package com.project.tim49.service;

import com.project.tim49.dto.PrescriptionDTO;
import com.project.tim49.model.Clinic;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.TypeOfExaminationRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class PrescriptionService {

    @Autowired
    PrescriptionRepository prescriptionRepository;

    @Autowired
    ClinicRepository clinicRepository;

    public List<PrescriptionDTO> findAll(Long clinic_id) {
        Clinic clinic =clinicRepository.getOne(clinic_id);
        List<TypeOfExamination> examinationTypes = clinic.getTypesOfExamination();
        List<TypeOfExaminationDTO> examinationTypesOfClinic = new ArrayList<>();

        for(TypeOfExamination toe : examinationTypes){
            examinationTypesOfClinic.add(new TypeOfExaminationDTO(toe));
        }
        return examinationTypesOfClinic;
    }
}
