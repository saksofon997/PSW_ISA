package com.project.tim49.controller;

import com.project.tim49.dto.UserDTO;
import com.project.tim49.dto.VacationDTO;
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

    @PostMapping(path = "/request",consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity createVacationRequest(@RequestBody VacationDTO vacationDTO) {

        if(vacationDTO == null) {
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        try{
            VacationDTO newVacation =
                    vacationService.createVacationRequest(vacationDTO);
            return new ResponseEntity<>(newVacation, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @GetMapping(path="/requests/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity<Object> getVacationRequests(@PathVariable("id") Long clinic_id) {
        if(clinic_id == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);

        List<VacationDTO> vacations = vacationService.findAll(clinic_id);
        return new ResponseEntity<>(vacations, HttpStatus.OK);
    }

    @GetMapping(path="/{id}")
    @PreAuthorize("hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity<Object> getStaffVacations(@PathVariable("id") Long staff_id) {
        if(staff_id == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);

        List<VacationDTO> vacations = vacationService.getVacationsStaff(staff_id);
        return new ResponseEntity<>(vacations, HttpStatus.OK);
    }

    @PutMapping(path="/approve/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity<Object> approveVacationRequest(@PathVariable("id") Long vacation_id) throws InterruptedException {
        if(vacation_id == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);
        UserDTO user = vacationService.approveVacationRequest(vacation_id);
        this.emailService.sendVacationRequestApprovedEmail(user);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping(path="/deny/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity<String> denyVacationRequest(@PathVariable("id") Long vacation_id, @RequestBody String message) throws InterruptedException {
        if(vacation_id == null)
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);
        try{
            UserDTO denied = vacationService.denyVacationRequest(vacation_id);
            this.emailService.sendVacationRequestDeniedEmail(denied, message);

            return new ResponseEntity<>("", HttpStatus.OK);
        }catch(InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }
}
