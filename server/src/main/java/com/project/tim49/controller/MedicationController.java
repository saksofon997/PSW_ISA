package com.project.tim49.controller;

import com.project.tim49.dto.MedicationDTO;
import com.project.tim49.model.MedicationDictionary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.project.tim49.service.MedicationService;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/medication")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMINCC') or hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity<List<MedicationDictionary>> getMedications() {

        List<MedicationDictionary> medications = medicationService.findAll();

        return new ResponseEntity<>(medications, HttpStatus.OK);
    }

    @PostMapping(consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity addMedication(@RequestBody MedicationDTO medicationDTO) {

        if (medicationDTO == null || medicationDTO.getCode() == null || medicationDTO.getName() == null){
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            MedicationDTO created = medicationService.createNewMedication(medicationDTO);
            return new ResponseEntity<>(created ,HttpStatus.OK);

        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(path="/change", consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity modifyMedication(@RequestBody MedicationDTO medicationDTO) {

        if (medicationDTO == null || medicationDTO.getId() == null){
            return new ResponseEntity<>("Invalid data", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            MedicationDTO changed = medicationService.changeMedicationData(medicationDTO);
            return new ResponseEntity<>(changed, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>("This medication does not exists!", HttpStatus.NOT_FOUND);
        } catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping(path="/delete/{id}")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity deleteMedication(@PathVariable("id") Long id) {
        if (id == null){
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);
        }

        try{
            medicationService.deleteMedication(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
