package com.project.tim49.service;

import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.TypeOfExaminationDTO;
import com.project.tim49.model.Appointment;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.ClinicTypeOfExamination;
import com.project.tim49.model.TypeOfExamination;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.ClinicTypeOfExaminationRepository;
import com.project.tim49.repository.TypeOfExaminationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    ClinicTypeOfExaminationRepository clinicTypeOfExaminationRepository;
    @Autowired
    ClinicRepository clinicRepository;

    public List<TypeOfExaminationDTO> findAll(Long clinic_id) {
        Clinic clinic =clinicRepository.getOne(clinic_id);
        List<ClinicTypeOfExamination> examinationTypes = clinicTypeOfExaminationRepository.getByClinic(clinic);
        List<TypeOfExaminationDTO> examinationTypesOfClinic = new ArrayList<>();

        for(ClinicTypeOfExamination toe : examinationTypes){
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
        TypeOfExamination type = examinationTypesRepository.getByNameAndOperation(typeOfExaminationDTO.getName(), typeOfExaminationDTO.isOperation());

        if (type != null){
            ClinicTypeOfExamination clinicType = clinicTypeOfExaminationRepository.getByClinicAndTypeOfExamination(clinic.get(), type);
            if (clinicType != null){
                throw new ValidationException("Type of examination with same name already exists in this clinic!");
            }

            clinicType = new ClinicTypeOfExamination();
            clinicType.setClinic(clinic.get());
            clinicType.setTypeOfExamination(type);
            clinicType.setPrice(typeOfExaminationDTO.getPrice());
            clinicTypeOfExaminationRepository.save(clinicType);
        } else {
            TypeOfExamination toe = new TypeOfExamination();
            toe.setName(typeOfExaminationDTO.getName());
            toe.setOperation(typeOfExaminationDTO.isOperation());
            examinationTypesRepository.save(toe);

            ClinicTypeOfExamination clinicType = new ClinicTypeOfExamination();
            clinicType.setClinic(clinic.get());
            clinicType.setTypeOfExamination(toe);
            clinicType.setPrice(typeOfExaminationDTO.getPrice());
            clinicTypeOfExaminationRepository.save(clinicType);
        }

        return typeOfExaminationDTO;
    }

    @Transactional
    public void deleteTypeOfExamination(Long clinic_id, Long type_id){
        Optional<TypeOfExamination> toe = examinationTypesRepository.findById(type_id);
        if (!toe.isPresent()){
            throw new NoSuchElementException("No type with that ID!");
        }
        Optional<Clinic> clinic = clinicRepository.findById(clinic_id);
        if (!clinic.isPresent()){
            throw new NoSuchElementException("No clinic with that ID!");
        }
        ClinicTypeOfExamination cliType = clinicTypeOfExaminationRepository.getByClinicAndTypeOfExamination(clinic.get(), toe.get());
        if (cliType == null){
            throw new NoSuchElementException("This type has not ben added to this clinic.");
        }

        List<Appointment> appointments = clinic.get().getAppointments();
        for(Appointment appointment: appointments){
            if(appointment.getTypeOfExamination().getId().equals(toe.get().getId())){
                throw new ValidationException("Type of examination is being used.");
            }
        }
        clinicTypeOfExaminationRepository.deleteByTypeOfExamination(toe.get());
    }
    public TypeOfExaminationDTO changeTypeOfExamination(TypeOfExaminationDTO typeOfExaminationDTO){
        TypeOfExamination toe = examinationTypesRepository.getOne(typeOfExaminationDTO.getId());
        if(toe==null ){
            throw new ValidationException("Type of examination not found.");
        }
        Optional<Clinic> clinic = clinicRepository.findById(typeOfExaminationDTO.getClinic_id());
        if (!clinic.isPresent()){
            throw new NoSuchElementException("No clinic with that ID!");
        }
        // Check if toe with same name already exists
//        List<TypeOfExamination> clinicExaminationTypes = clinic.get().getTypesOfExamination();
//        for (TypeOfExamination t : clinicExaminationTypes){
//            if(t.getName().equals(typeOfExaminationDTO.getName()) && t.getId() != typeOfExaminationDTO.getId()){
//                throw new ValidationException("Type of examination with same name already exists!");
//            }
//        }
        // Check if toe is being used
        ClinicTypeOfExamination cliType = clinicTypeOfExaminationRepository.getByClinicAndTypeOfExamination(clinic.get(), toe);
        if (cliType == null){
            throw new NoSuchElementException("This type has not ben added to this clinic. You can't change it.");
        }

        List<Appointment> appointments = clinic.get().getAppointments();
        for(Appointment appointment: appointments){
            if(appointment.getTypeOfExamination().getId().equals(toe.getId())){
                throw new ValidationException("Type of examination is being used.");
            }
        }

        cliType.setPrice(typeOfExaminationDTO.getPrice());
        clinicTypeOfExaminationRepository.save(cliType);
        return typeOfExaminationDTO;
    }

    public List<TypeOfExaminationDTO> getByQuery(String name, Float minPrice, Float maxPrice, Long clinic_id) {
        if (minPrice == null){
            minPrice = 0f;
        }
        if (maxPrice == null){
            maxPrice = 340282300000000000000000000000000000000f;
        }
        List<ClinicTypeOfExamination> types = clinicTypeOfExaminationRepository.getByQuery(name, minPrice, maxPrice, clinic_id);
        List<TypeOfExaminationDTO> typeDTOS = new ArrayList<>();
        for(ClinicTypeOfExamination t: types) {
            TypeOfExaminationDTO typeDTO = new TypeOfExaminationDTO(t);
            typeDTOS.add(typeDTO);
        }
        return typeDTOS;
    }

    public List<TypeOfExaminationDTO> findAllInCC() {
        List<TypeOfExamination> allTypes = examinationTypesRepository.findAll();
        List<TypeOfExaminationDTO> allTypesDtos = new ArrayList<>();

        for (TypeOfExamination type : allTypes) {
            allTypesDtos.add(new TypeOfExaminationDTO(type));
        }
        return allTypesDtos;
    }
}
