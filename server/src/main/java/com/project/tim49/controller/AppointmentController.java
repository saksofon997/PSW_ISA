package com.project.tim49.controller;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.model.Appointment;
import com.project.tim49.service.*;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.NoSuchElementException;

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
    @Autowired
    private EmailService emailService;

    @GetMapping(path="/getClinicAvailableAppointments/{clinic_id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('PATIENT')")
    public ResponseEntity getClinicAvailableAppointments(@PathVariable Long clinic_id) {
        try {
            ArrayList<AppointmentDTO> availableAppointments  = appointmentService.getClinicAvailableAppointments(clinic_id);
            return new ResponseEntity<>(availableAppointments, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("Invalid clinic", HttpStatus.NOT_FOUND);
        }
    }

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
            boolean duringShift = doctorService.isDuringDoctorWorkingHours(appointmentDTO.getDoctors().get(0).getId(),null,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!duringShift){
                return new ResponseEntity<>("Doctor's shift has ended", HttpStatus.BAD_REQUEST);
            }
            boolean doctorAvailable = doctorService.isAvailable(appointmentDTO.getDoctors().get(0).getId(),null, appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!doctorAvailable){
                return new ResponseEntity<>("Doctor is not available", HttpStatus.BAD_REQUEST);
            }
            boolean ordinationAvailable = ordinationService.isAvailable(appointmentDTO.getOrdination().getId(),null,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!ordinationAvailable){
                return new ResponseEntity<>("Ordination is not available", HttpStatus.BAD_REQUEST);
            }
            AppointmentDTO returnValue = appointmentService.startAppointment(appointmentDTO);

            return new ResponseEntity<>(returnValue, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (NumberFormatException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(path="/createAvailableAppointment" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity createAvailableAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        if (appointmentDTO == null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if(appointmentDTO.getDoctors() == null
                || appointmentDTO.getStartingDateAndTime() == 0 || appointmentDTO.getDuration() == 0
                || appointmentDTO.getPatient() != null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            boolean duringShift = doctorService.isDuringDoctorWorkingHours(appointmentDTO.getDoctors().get(0).getId(),null,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!duringShift){
                return new ResponseEntity<>("Appointment is not during doctor's working hours", HttpStatus.BAD_REQUEST);
            }
            boolean doctorAvailable = doctorService.isAvailable(appointmentDTO.getDoctors().get(0).getId(), null, appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!doctorAvailable){
                return new ResponseEntity<>("Doctor is not available", HttpStatus.BAD_REQUEST);
            }
            boolean ordinationAvailable = ordinationService.isAvailable(appointmentDTO.getOrdination().getId(),null,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!ordinationAvailable){
                return new ResponseEntity<>("Ordination is not available", HttpStatus.BAD_REQUEST);
            }
            appointmentService.createAvailableAppointment(appointmentDTO);

            return new ResponseEntity<>(appointmentDTO, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (NumberFormatException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(path="/deleteAvailableAppointment/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity deleteAvailableAppointment(@PathVariable("id") Long id) {
        if (id == null){
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);
        }

        try{
            appointmentService.deleteAppointment(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (ValidationException | NoSuchElementException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @PutMapping(path="/choseAvailableAppointment/{appointment_id}/{patient_id}")
    @PreAuthorize("hasAuthority('PATIENT')")
    public ResponseEntity choseAvailableAppointment(@PathVariable("appointment_id") Long appointment_id, @PathVariable("patient_id") Long patient_id) {
        if (appointment_id == null || patient_id == null){
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);
        }

        try{
            AppointmentDTO appointmentDTO = appointmentService.choseAvailableAppointment(appointment_id, patient_id);
            this.emailService.sendAvailableAppointmentScheduled(appointmentDTO);

            return new ResponseEntity<>(appointment_id, HttpStatus.OK);
        } catch (ValidationException | NoSuchElementException | InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
