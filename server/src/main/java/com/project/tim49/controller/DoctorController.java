package com.project.tim49.controller;

import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
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
    public ResponseEntity getClinicDoctors(@PathVariable Long clinic_id) {
        try {
            List<DoctorDTO> doctors = clinicService.getClinicDoctors(clinic_id);
            return new ResponseEntity<>(doctors, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>("No clinic with this id", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
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

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path="/delete/{id}")
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

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
