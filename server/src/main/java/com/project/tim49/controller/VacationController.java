package com.project.tim49.controller;

import com.project.tim49.dto.UserDTO;
import com.project.tim49.dto.VacationDTO;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.DoctorService;
import com.project.tim49.service.EmailService;
import com.project.tim49.service.VacationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/vacations")
public class VacationController {

    @Autowired
    private VacationService vacationService;
    @Autowired
    private EmailService emailService;

    @PostMapping(path = "/{id}",consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity createVacationRequest(@PathVariable("id") Long staff_id,
                                               @RequestBody VacationDTO vacationDTO) {

        if(vacationDTO == null) {
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        try{
            VacationDTO newVacation =
                    vacationService.createVacationRequest(vacationDTO,
                            staff_id);
            return new ResponseEntity<>(newVacation, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @GetMapping(path="/requests/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity<List<VacationDTO>> getVacationRequests(@PathVariable("id") Long clinic_id) {
        List<VacationDTO> vacations = vacationService.findAll(clinic_id);
        return new ResponseEntity(vacations, HttpStatus.OK);
    }

    @GetMapping(path="/{id}")
    @PreAuthorize("hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity<List<VacationDTO>> getStaffVacations(@PathVariable("id") Long staff_id) {
        List<VacationDTO> vacations = vacationService.getVacationsStaff(staff_id);
        return new ResponseEntity(vacations, HttpStatus.OK);
    }

    @PutMapping(path="/approve/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity approveVacationRequest(@PathVariable("id") Long vacation_id) {
        VacationDTO approved = vacationService.approveVacationRequest(vacation_id);
        return new ResponseEntity(approved, HttpStatus.OK);
    }

    @PutMapping(path="/deny/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity denyVacationRequest(@PathVariable("id") Long vacation_id, @RequestBody String message) throws InterruptedException {
        try{
            UserDTO denied = vacationService.denyVacationRequest(vacation_id);
            this.emailService.sendVacationRequestDeniedEmail(denied, message);
        }catch(InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
        return null;
    }
}
