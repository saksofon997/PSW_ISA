package com.project.tim49.controller;

import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.ClinicAdministrator;
import com.project.tim49.service.ClinicAdministratorService;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.impl.AuthorityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/clinicAdmin")
public class ClinicAdministratorController {

    @Autowired
    private ClinicAdministratorService clinicAdministratorService;
    @Autowired
    private ClinicService clinicService;
    @Autowired
    private AuthorityServiceImpl authorityService;

    @GetMapping(path="/getAdminC/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINC')")
    public ResponseEntity getAdminC(@PathVariable Long id) {
        ClinicAdministratorDTO adminDTO = clinicAdministratorService.findById(id);
        if (adminDTO != null){
            return new ResponseEntity<>(adminDTO,HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Clinic admin with id: "+id+" not found!",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path="/add" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addClinicAdministrator(@RequestBody ClinicAdministratorDTO clinicAdministratorDTO){

        if (clinicAdministratorDTO.getEmail() == null || clinicAdministratorDTO.getEmail().equals("")){
            return new ResponseEntity<>("Invalid email", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            clinicAdministratorService.createNewClinicAdministrator(clinicAdministratorDTO);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path="/delete/{id}" )
    public ResponseEntity deleteClinicAdministrator(@PathVariable Long id){
        if (id == null){
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);
        }

        try{
            clinicAdministratorService.deleteClinicAdministrator(id);
            return new ResponseEntity<>("Clinic administrator deleted", HttpStatus.OK);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @PutMapping(path="/change" )
    public ResponseEntity changeClinicAdministratorInformation(@RequestBody ClinicAdministratorDTO clinicAdministratorDTO){

        if (clinicAdministratorDTO == null || clinicAdministratorDTO.getId() == null){
            return new ResponseEntity<>("Invalid data", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            ClinicAdministratorDTO clinicDTO = clinicAdministratorService.changeClinicAdministratorData(clinicAdministratorDTO);
            return new ResponseEntity<>(clinicDTO, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>("This user does not exists!", HttpStatus.NOT_FOUND);
        } catch (ValidationException e){
            return new ResponseEntity<>("Clinic does not exists!", HttpStatus.NOT_FOUND);
        }
    }
}
