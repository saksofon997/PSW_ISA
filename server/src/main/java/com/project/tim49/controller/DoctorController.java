package com.project.tim49.controller;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;
    @Autowired
    private ClinicService clinicService;

    @GetMapping(path = "/getClinicDoctors/{clinic_id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('PATIENT')")
    public ResponseEntity getClinicDoctors(@PathVariable Long clinic_id) {
        try {
            List<DoctorDTO> doctors = clinicService.getClinicDoctors(clinic_id);
            return new ResponseEntity<>(doctors, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>("No clinic with this id", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path = "/getDoctor/{doctor_id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR')")
    public ResponseEntity getDoctor(@PathVariable Long doctor_id) {
        try {
            DoctorDTO doctor = doctorService.getDoctor(doctor_id);
            return new ResponseEntity<>(doctor, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(e, HttpStatus.NO_CONTENT);
        }
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity addDoctor(@RequestBody DoctorDTO doctorDTO){
        if (doctorDTO.getEmail() == null || doctorDTO.getEmail().equals("")){
            return new ResponseEntity<>("Invalid email", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        if (!doctorService.shiftValid(doctorDTO.getShiftStart(), doctorDTO.getShiftEnd())){
            return new ResponseEntity<>("Invalid shift", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            doctorService.createNewDoctor(doctorDTO);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return new ResponseEntity<>(doctorDTO, HttpStatus.OK);
    }

    @DeleteMapping(path="/delete/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity deleteDoctor(@PathVariable Long id) {
        if (id == null){
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);
        }

        try {
            boolean hasActiveAppointments = doctorService.hasActiveAppointments(id);

            if (hasActiveAppointments){
                return new ResponseEntity<>("This doctor has appointments that are not completed!", HttpStatus.FORBIDDEN);
            }

            doctorService.deleteDoctor(id);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @PutMapping(path="/change" )
    @PreAuthorize("hasAuthority('DOCTOR')")
    public ResponseEntity changeDoctor(@RequestBody DoctorDTO doctorDTO){

        if (doctorDTO == null || doctorDTO.getId() == null){
            return new ResponseEntity<>("Invalid data", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        try {
            DoctorDTO changedDTO = doctorService.changeDoctorData(doctorDTO);
            return new ResponseEntity<>(changedDTO, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>("This user does not exists!", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/search_doctors")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity getAllByQuery(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "surname", required = false) String surname,
            @RequestParam(value = "clinic_id", required = false) Long clinic_id
    ) {
        List<DoctorDTO> doctors = doctorService.getByQuery(name, surname, clinic_id);
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }

    @GetMapping(path="/appointments/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR')")
    public ResponseEntity getDoctorAppointments(@PathVariable Long id) {
        List<AppointmentDTO> appointments = new ArrayList<>();
        try{
         appointments = doctorService.getAppointments(id);

        }catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

    @GetMapping(path="/oneAppointment/{id}/{appID}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR')")
    public ResponseEntity getOneAppointment(@PathVariable Long id,@PathVariable Long appID) {
        AppointmentDTO appointment = new AppointmentDTO();
        try{
            appointment = doctorService.getOneAppointment(id, appID);

        }catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        if(appointment == null){
            return new ResponseEntity<>("Appointment not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }

    @GetMapping(path = "/canViewMedicalRecord/{patient_id}/{doctor_id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR')")
    public ResponseEntity canViewMedicalRecord(@PathVariable Long patient_id, @PathVariable Long doctor_id) {
        try {
            if (doctorService.canViewPatientMedicalRecord(patient_id, doctor_id)){
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("You are not allowed to see the medical record of this patient", HttpStatus.FORBIDDEN);
            }
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(path = "/rateDoctor")
    @PreAuthorize("hasAuthority('PATIENT')")
    public ResponseEntity rateDoctor(
            @RequestParam(value = "doctor_id", required = true) Long doctor_id,
            @RequestParam(value = "patient_id", required = true) Long patient_id,
            @RequestParam(value = "stars", required = true) int stars
    ) {
        try {
            this.doctorService.rateDoctor(doctor_id, patient_id, stars);
            return new ResponseEntity<>(doctor_id, HttpStatus.OK);
        } catch (ValidationException | NoSuchElementException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
