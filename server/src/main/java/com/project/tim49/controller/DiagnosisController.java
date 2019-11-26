package com.project.tim49.controller;

import com.project.tim49.dto.DiagnosisDTO;
import com.project.tim49.model.DiagnosisDictionary;
import com.project.tim49.service.DiagnosisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/diagnosis")
public class DiagnosisController {

    @Autowired
    private DiagnosisService diagnosisService;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMINCC') or hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity<List<DiagnosisDictionary>> getDiagnosis() {

        List<DiagnosisDictionary> diagnosis = diagnosisService.findAll();

        return new ResponseEntity<>(diagnosis, HttpStatus.OK);
    }

    @PostMapping(consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity addDiagnosis(@RequestBody DiagnosisDTO diagnosisDTO) {

        if(diagnosisDTO == null || diagnosisDTO.getCode() == null || diagnosisDTO.getDescription() == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);

        try{
            DiagnosisDTO newDiagnosis =
                    diagnosisService.createNewDiagnosis(diagnosisDTO);
            return new ResponseEntity<>(newDiagnosis, HttpStatus.CREATED);

        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PutMapping(path="/change", consumes = "application/json", produces=
            "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity modifyDiagnosis(@RequestBody DiagnosisDTO diagnosisDTO) {

        if(diagnosisDTO == null || diagnosisDTO.getId() == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);

        try{
            DiagnosisDTO editDiagnosis =
                    diagnosisService.changeDiagnosisData(diagnosisDTO);
            return new ResponseEntity<>(editDiagnosis, HttpStatus.CREATED);

        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping(path="/delete/{id}")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity deleteDiagnosis(@PathVariable("id") Long id) {

        if (id == null)
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);

        try{
            diagnosisService.deleteDiagnosis(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
