package com.project.tim49.controller;

import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/patient")
public class PatientController {
    @Autowired
    PatientService patientService;

    @Autowired
    ClinicService clinicService;

    @GetMapping(path="/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('PATIENT')")
    public ResponseEntity getPatient(@PathVariable Long id) {
        UserDTO patient = patientService.findById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PutMapping(path="/change", consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('PATIENT')")
    public ResponseEntity modifyPatient(@RequestBody UserDTO userDTO) {
        if(userDTO!= null){
            try {
                patientService.changePatient(userDTO);
                return new ResponseEntity<>(userDTO, HttpStatus.OK);
            }catch (ValidationException e){
                return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        return new ResponseEntity<>("Bad request", HttpStatus.BAD_REQUEST);
    }

}
