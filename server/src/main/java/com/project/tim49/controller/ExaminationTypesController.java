package com.project.tim49.controller;

import com.project.tim49.dto.DiagnosisDTO;
import com.project.tim49.dto.TypeOfExaminationDTO;
import com.project.tim49.model.DiagnosisDictionary;
import com.project.tim49.service.TypeOfExaminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/examinationTypes")
public class ExaminationTypesController {

    @Autowired
    TypeOfExaminationService examinationTypesService;

    @GetMapping(path="/{id}")
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity<List<DiagnosisDictionary>> getExaminationTypes(@PathVariable("id") Long clinic_id) {
        List<TypeOfExaminationDTO> examinationTypes = examinationTypesService.findAll(clinic_id);
        return new ResponseEntity(examinationTypes, HttpStatus.OK);
    }

    @PostMapping(path = "/{id}",consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity addTypeOfExamination(@PathVariable("id") Long clinic_id,
                                               @RequestBody TypeOfExaminationDTO typeOfExaminationDTO) {

        if(typeOfExaminationDTO == null || typeOfExaminationDTO.getName() == null) {
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        try{
            TypeOfExaminationDTO newTypeOfExamination =
                    examinationTypesService.createTypeOfExamination(typeOfExaminationDTO,clinic_id);
            return new ResponseEntity<>(newTypeOfExamination, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping(path="/delete/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity deleteDiagnosis(@PathVariable("id") Long id) {

        if (id == null)
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);

        try{
            examinationTypesService.deleteTypeOfExamination(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @PutMapping(path="/change", consumes = "application/json", produces=
            "application/json")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity modifyDiagnosis(@RequestBody TypeOfExaminationDTO typeOfExaminationDTO) {

        if(typeOfExaminationDTO == null || typeOfExaminationDTO.getId() == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);

        try{
            TypeOfExaminationDTO editTypeOfExamination =
                    examinationTypesService.changeTypeOfExamination(typeOfExaminationDTO);
            return new ResponseEntity<>(editTypeOfExamination, HttpStatus.CREATED);

        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
