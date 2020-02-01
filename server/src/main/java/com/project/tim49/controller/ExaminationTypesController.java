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
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('DOCTOR') or hasAuthority('PATIENT') or hasAuthority" +
            "('NURSE')")
    public ResponseEntity<List<TypeOfExaminationDTO>> getExaminationTypes(@PathVariable("id") Long clinic_id) {
        List<TypeOfExaminationDTO> examinationTypes = examinationTypesService.findAll(clinic_id);
        return new ResponseEntity(examinationTypes, HttpStatus.OK);
    }

    @GetMapping(path="/getAll")
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('DOCTOR') or hasAuthority('PATIENT') or hasAuthority" +
            "('NURSE')")
    public ResponseEntity<List<TypeOfExaminationDTO>> getExaminationTypes() {
        List<TypeOfExaminationDTO> examinationTypes = examinationTypesService.findAllInCC();
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

    @DeleteMapping(path="/delete/{clinic_id}/{type_id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity deleteDiagnosis(@PathVariable("clinic_id") Long clinic_id, @PathVariable("type_id") Long type_id) {

        if (type_id == null || clinic_id == null)
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);

        try{
            examinationTypesService.deleteTypeOfExamination(clinic_id, type_id);
            return new ResponseEntity<>(type_id, HttpStatus.OK);
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

    @GetMapping("/search_types")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity getAllByQuery(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "min_price", required = false) Float minPrice,
            @RequestParam(value = "max_price", required = false) Float maxPrice,
            @RequestParam(value = "clinic_id", required = false) Long clinic_id
    ) {
        List<TypeOfExaminationDTO> types = examinationTypesService.getByQuery(name, minPrice, maxPrice, clinic_id);
        return new ResponseEntity(types, HttpStatus.OK);
    }
}
