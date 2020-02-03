package com.project.tim49.controller;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.service.AppointmentRequestService;
import com.project.tim49.service.AppointmentService;
import com.project.tim49.service.DoctorService;
import com.project.tim49.service.EmailService;
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
@RequestMapping(value = "api/appointmentRequest")
public class AppointmentRequestController {

    @Autowired
    private DoctorService doctorService;
    @Autowired
    private AppointmentRequestService appointmentRequestService;
    @Autowired
    private EmailService emailService;

    @GetMapping(path="/getClinicAppointmentRequests/{clinic_id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity getClinicAppointmentRequests(@PathVariable Long clinic_id) {
        try {
            ArrayList<AppointmentDTO> appointmentRequests  = appointmentRequestService.getClinicAppointmentRequests(clinic_id);
            return new ResponseEntity<>(appointmentRequests, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("Invalid clinic", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path="/scheduleNewAppointment" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR') or hasAuthority('PATIENT')")
    public ResponseEntity scheduleNewAppointment(@RequestBody AppointmentDTO appointmentDTO) throws InterruptedException{
        if (appointmentDTO == null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if(appointmentDTO.getStartingDateAndTime() == 0 || appointmentDTO.getPatient() == null
                || appointmentDTO.getDoctors() == null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            boolean duringShift = doctorService.isDuringDoctorWorkingHours(appointmentDTO.getDoctors().get(0).getId(),null,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!duringShift){
                return new ResponseEntity<>("The selected time does not fall in working hours", HttpStatus.BAD_REQUEST);
            }
            boolean doctorAvailable = doctorService.isAvailable(appointmentDTO.getDoctors().get(0).getId(), null,appointmentDTO.getStartingDateAndTime(), appointmentDTO.getDuration());
            if (!doctorAvailable){
                return new ResponseEntity<>("There are scheduled appointments at that time", HttpStatus.BAD_REQUEST);
            }

            AppointmentDTO returnValue = appointmentRequestService.scheduleNewAppointment(appointmentDTO);
            this.emailService.sendNewAppointmentScheduled(returnValue.getPatient(), returnValue.getDoctors().get(0), new DateTime(appointmentDTO.getStartingDateAndTime()*1000));

            return new ResponseEntity<>(returnValue, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (NumberFormatException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(path="/approveAppointmentRequest" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity approveAppointmentRequest(@RequestBody AppointmentDTO appointmentDTO) throws InterruptedException {
        if (appointmentDTO == null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if(appointmentDTO.getDoctors() == null
                || appointmentDTO.getStartingDateAndTime() == 0 || appointmentDTO.getDuration() == 0
                || appointmentDTO.getPatient() == null){
            return new ResponseEntity<>("Invalid appointment", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            AppointmentDTO returnValue = appointmentRequestService.approveAppointmentRequest(appointmentDTO);
            this.emailService.sendAppointmentRequestApproved(returnValue);

            return new ResponseEntity<>(returnValue, HttpStatus.CREATED);
        } catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }
    }
