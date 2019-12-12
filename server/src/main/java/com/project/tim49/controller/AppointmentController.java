package com.project.tim49.controller;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.model.Appointment;
import com.project.tim49.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/appointment")
public class AppointmentController {

    @Autowired
    private DoctorService doctorService;
    @Autowired
    private OrdinationService ordinationService;
    @Autowired
    private AppointmentService appointmentService;


    @PostMapping(path="/startAppointment" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR')")
    public ResponseEntity startAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        if (appointmentDTO == null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if(appointmentDTO.getDoctors() == null
                || appointmentDTO.getStartingDateAndTime() == 0 || appointmentDTO.getDuration() == 0
                || appointmentDTO.getPatient() == null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            boolean doctorAvailable = doctorService.isAvailable(appointmentDTO.getDoctors().get(0).getId() ,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!doctorAvailable){
                return new ResponseEntity<>("Doctor is not available", HttpStatus.BAD_REQUEST);
            }
            boolean ordinationAvailable = ordinationService.isAvailable(appointmentDTO.getOrdination().getId() ,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!ordinationAvailable){
                return new ResponseEntity<>("Ordination is not available", HttpStatus.BAD_REQUEST);
            }
            appointmentService.save(appointmentDTO);

            return new ResponseEntity<>(appointmentDTO, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
