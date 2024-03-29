package com.project.tim49.controller;

import com.project.tim49.dto.*;
import com.project.tim49.model.Appointment;
import com.project.tim49.model.Doctor;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.DoctorService;
import com.project.tim49.service.EmailService;
import com.project.tim49.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/patient")
public class PatientController {
    @Autowired
    PatientService patientService;

    @Autowired
    ClinicService clinicService;

    @Autowired
    EmailService emailService;

    @GetMapping(path="/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('PATIENT') or hasAuthority('DOCTOR')")
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
            } catch (ValidationException e){
                return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        return new ResponseEntity<>("Bad request", HttpStatus.BAD_REQUEST);
    }

    @GetMapping(path="/getPendingAppointments/{patient_id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
//    @PreAuthorize("hasAuthority('PATIENT')")
    public ResponseEntity getPendingAppointments(@PathVariable Long patient_id) {
        if (patient_id == null){
            return new ResponseEntity<>("Bad patient id", HttpStatus.BAD_REQUEST);
        }

        try {
            List<AppointmentDTO> pendingAppointments = patientService.getPendingAppointments(patient_id);

            return new ResponseEntity<>(pendingAppointments, HttpStatus.OK);
        } catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    @GetMapping(path = "/getClinicPatients/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity getPatients(@PathVariable Long id) {
        try {
            List<PatientDTO> patients = patientService.getClinicPatients(id);
            return new ResponseEntity<>(patients, HttpStatus.OK);
        } catch (ValidationException e){
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path = "/getMedicalRecord/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('PATIENT') or hasAuthority('NURSE') or hasAuthority('DOCTOR')")
    public ResponseEntity getMedicalRecord(@PathVariable Long id) {
        try {
            MedicalRecordDTO medicalRecordDTO = patientService.getMedicalRecord(id);
            return new ResponseEntity<>(medicalRecordDTO, HttpStatus.OK);
        } catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/search_patients")
    @PreAuthorize("hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity getAllByQuery(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "surname", required = false) String surname,
            @RequestParam(value = "upin", required = false) String upin,
            @RequestParam(value = "clinicid", required = true) Long clinicID
    ) {
        List<PatientDTO> patientDTOS = patientService.getByQuery(name, surname, upin, clinicID);
        return new ResponseEntity<>(patientDTOS, HttpStatus.OK);
    }

    @DeleteMapping("/cancelAppointment/{patientID}/{appID}/{currentTime}")
    @PreAuthorize("hasAuthority('PATIENT') or hasAuthority('DOCTOR')")
    public ResponseEntity cancelAppointment(@PathVariable Long patientID, @PathVariable Long appID,@PathVariable Long currentTime) {
        if (patientID == null){
            return new ResponseEntity<>("Invalid patient id.", HttpStatus.BAD_REQUEST);
        }
        if (appID == null){
            return new ResponseEntity<>("Invalid appointment.", HttpStatus.BAD_REQUEST);
        }
        AppointmentDTO appointmentDTO = new AppointmentDTO();
        try{
            appointmentDTO = patientService.cancelAppointment(patientID,appID,currentTime);



        }catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
        }
        try {
            List<ClinicAdministratorDTO> admins =  clinicService.getClinicAdmins(appointmentDTO.getClinic().getId());
            emailService.sendAppointmentCanceled(admins, appointmentDTO);
        }catch (MailException e){
            System.out.println("Slanje emaila administratorima nije uspelo.");
        }
        return new ResponseEntity<>(appointmentDTO, HttpStatus.OK);
    }
}
