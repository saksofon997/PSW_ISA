package com.project.tim49.controller;

import com.project.tim49.dto.PrescriptionDTO;
import com.project.tim49.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/prescriptions")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @GetMapping(path="/{id}")
    @PreAuthorize("hasAuthority('NURSE')")
    public ResponseEntity<Object> getPrescriptionRequests(@PathVariable("id") Long clinic_id) {
        if(clinic_id == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);

        List<PrescriptionDTO> prescriptionDTOS = prescriptionService.findAll(clinic_id);
        return new ResponseEntity<>(prescriptionDTOS, HttpStatus.OK);
    }

    @PutMapping(path="/approve/{id}", consumes = "application/json")
    @PreAuthorize("hasAuthority('NURSE')")
    public ResponseEntity<Object> approvePrescription(@PathVariable("id") Long nurse_id,
                                                      @RequestBody PrescriptionDTO prescriptionDTO) {
        if(nurse_id == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);

        PrescriptionDTO approved = prescriptionService.approvePrescription(prescriptionDTO, nurse_id);
        return new ResponseEntity<>(approved, HttpStatus.OK);
    }
}
