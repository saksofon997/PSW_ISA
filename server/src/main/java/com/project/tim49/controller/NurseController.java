package com.project.tim49.controller;

import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.dto.NurseDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.NurseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/nurse")
public class NurseController {

    @Autowired
    private NurseService nurseService;

    @GetMapping(path="/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('NURSE')")
    public ResponseEntity getNurse(@PathVariable Long id) {
        UserDTO patient = nurseService.findById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PutMapping(path="/change" )
    @PreAuthorize("hasAuthority('NURSE') or hasAuthority('ADMINC')")
    public ResponseEntity changeDoctor(@RequestBody NurseDTO nurseDTO){

        if (nurseDTO == null || nurseDTO.getId() == null){
            return new ResponseEntity<>("Invalid data", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            NurseDTO changedDTO = nurseService.changeNurseData(nurseDTO);
            return new ResponseEntity<>(changedDTO, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>("This nurse does not exists!",
                    HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/getClinicNurses/{clinic_id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity getClinicNurses(@PathVariable Long clinic_id) {
        try {
            List<NurseDTO> nurses = nurseService.getNurses(clinic_id);
            return new ResponseEntity<>(nurses, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>("No clinic with this id", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity addNurse(@RequestBody NurseDTO nurseDTO){
        if (nurseDTO.getEmail() == null || nurseDTO.getEmail().equals("")){
            return new ResponseEntity<>("Invalid email", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        if (!nurseService.shiftValid(nurseDTO.getShiftStart(), nurseDTO.getShiftEnd())){
            return new ResponseEntity<>("Invalid shift", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            nurseService.createNewNurse(nurseDTO);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return new ResponseEntity<>(nurseDTO, HttpStatus.OK);
    }

    @DeleteMapping(path="/delete/{id}")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity deleteNurse(@PathVariable Long id) {
        if (id == null){
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);
        }

        try {
            nurseService.deleteNurse(id);

            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    @GetMapping("/search_nurses")
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity getAllByQuery(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "surname", required = false) String surname,
            @RequestParam(value = "clinic_id", required = false) Long clinic_id
    ) {
        List<NurseDTO> nurses = nurseService.getByQuery(name, surname, clinic_id);
        return new ResponseEntity(nurses, HttpStatus.OK);
    }
}
