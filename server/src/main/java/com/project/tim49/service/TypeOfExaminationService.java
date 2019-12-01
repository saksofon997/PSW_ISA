package com.project.tim49.service;

import com.project.tim49.dto.TypeOfExaminationDTO;
import com.project.tim49.model.Appointment;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.TypeOfExamination;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.TypeOfExaminationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TypeOfExaminationService {

    @Autowired
    TypeOfExaminationRepository examinationTypesRepository;

    @Autowired
    ClinicRepository clinicRepository;

    public List<TypeOfExaminationDTO> findAll(Long clinic_id) {
        Clinic clinic =clinicRepository.getOne(clinic_id);
        List<TypeOfExamination> examinationTypes = clinic.getTypesOfExamination();
        List<TypeOfExaminationDTO> examinationTypesOfClinic = new ArrayList<>();

        for(TypeOfExamination toe : examinationTypes){
                examinationTypesOfClinic.add(new TypeOfExaminationDTO(toe));
        }
        return examinationTypesOfClinic;
    }

    public TypeOfExaminationDTO createTypeOfExamination(TypeOfExaminationDTO typeOfExaminationDTO,Long clinic_id){
        if (clinic_id == null){
            throw new ValidationException("Invalid clinic ID!");
        }
        Optional<Clinic> clinic = clinicRepository.findById(clinic_id);
        if (!clinic.isPresent()){
            throw new NoSuchElementException("No clinic with that ID!");
        }
        List<TypeOfExamination> clinicExaminationTypes = clinic.get().getTypesOfExamination();
        for (TypeOfExamination t : clinicExaminationTypes){
            if(t.getName().equals(typeOfExaminationDTO.getName())){
                throw new ValidationException("Type of examination with same name already exists!");
            }
        }
        TypeOfExamination toe = new TypeOfExamination();
        toe.setClinic_id(clinic.get());
        toe.setName(typeOfExaminationDTO.getName());
        toe.setPrice(typeOfExaminationDTO.getPrice());
        examinationTypesRepository.save(toe);
        return typeOfExaminationDTO;
    }

    public void deleteTypeOfExamination(Long id){
        TypeOfExamination toe = examinationTypesRepository.getOne(id);
        Optional<Clinic> clinic = clinicRepository.findById(toe.getClinic_id().getId());
        if (!clinic.isPresent()){
            throw new NoSuchElementException("No clinic with that ID!");
        }
        List<Appointment> appointments = clinic.get().getAppointment();
        for(Appointment appointment: appointments){
            if(appointment.getTypeOfExamination().getId().equals(toe.getId())){
                throw new ValidationException("Type of examination is being used.");
            }
        }
        examinationTypesRepository.deleteById(toe.getId());
    }
    public TypeOfExaminationDTO changeTypeOfExamination(TypeOfExaminationDTO typeOfExaminationDTO){
        TypeOfExamination toe = examinationTypesRepository.getOne(typeOfExaminationDTO.getId());
        if(toe==null ){
            throw new ValidationException("Type of examinnation not found.");
        }
        Optional<Clinic> clinic = clinicRepository.findById(typeOfExaminationDTO.getClinic_id());
        if (!clinic.isPresent()){
            throw new NoSuchElementException("No clinic with that ID!");
        }
        // Check if toe with same name already exists
        List<TypeOfExamination> clinicExaminationTypes = clinic.get().getTypesOfExamination();
        for (TypeOfExamination t : clinicExaminationTypes){
            if(t.getName().equals(typeOfExaminationDTO.getName())){
                throw new ValidationException("Type of examination with same name already exists!");
            }
        }
        // Check if toe is being used
        List<Appointment> appointments = clinic.get().getAppointment();
        for(Appointment appointment: appointments){
            if(appointment.getTypeOfExamination().getId().equals(toe.getId())){
                throw new ValidationException("Type of examination is being used.");
            }
        }
        toe.setPrice(typeOfExaminationDTO.getPrice());
        toe.setName(typeOfExaminationDTO.getName());
        examinationTypesRepository.save(toe);
        return typeOfExaminationDTO;
    }

    public List<TypeOfExaminationDTO> getByQuery(String name, Float minPrice, Float maxPrice, Long clinic_id) {
        if (minPrice == null){
            minPrice = 0f;
        }
        if (maxPrice == null){
            maxPrice = 340282300000000000000000000000000000000f;
        }
        List<TypeOfExamination> types = examinationTypesRepository.getByQuery(name, minPrice, maxPrice, clinic_id);
        List<TypeOfExaminationDTO> typeDTOS = new ArrayList<>();
        for(TypeOfExamination t: types) {
            TypeOfExaminationDTO typeDTO = new TypeOfExaminationDTO(t);
            typeDTOS.add(typeDTO);
        }
        return typeDTOS;
    }

}
