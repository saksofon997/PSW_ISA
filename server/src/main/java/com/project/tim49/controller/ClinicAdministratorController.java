package com.project.tim49.controller;

import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.model.ClinicAdministrator;
import com.project.tim49.service.ClinicAdministratorService;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.impl.AuthorityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

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

    @GetMapping(path="" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ClinicAdministratorDTO>> getClinicAdmins() {
        return new ResponseEntity<List<ClinicAdministratorDTO>>(clinicAdministratorService.findAll(), HttpStatus.OK);
    }

    @PostMapping(path="/add" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addClinicAdministrator(@RequestBody ClinicAdministratorDTO clinicAdministratorDTO){
        ClinicAdministrator check = clinicAdministratorService.findOneByEmail(clinicAdministratorDTO.getEmail());
        if (check != null) {
            return new ResponseEntity<>("User with this email already exists!", HttpStatus.CONFLICT);
        }

        ClinicAdministrator admin = new ClinicAdministrator();
        admin.setEmail(clinicAdministratorDTO.getEmail());
        admin.setName(clinicAdministratorDTO.getName());
        admin.setSurname(clinicAdministratorDTO.getSurname());
        admin.setAddress(clinicAdministratorDTO.getAddress());
        admin.setCity(clinicAdministratorDTO.getCity());
        admin.setState(clinicAdministratorDTO.getState());
        admin.setPhoneNumber(clinicAdministratorDTO.getPhoneNumber());
        admin.setUpin(clinicAdministratorDTO.getUpin());
        admin.setPasswordChanged(false);
        admin.setAuthorities( authorityService.findByname("ADMINCC") );
        admin.setClinic( clinicService.findOne(clinicAdministratorDTO.getClinic_id()) );

        admin.setPassword("ClinicalCenterDefaultPassword");

        admin = clinicAdministratorService.save(admin);
        if (admin != null){
            return new ResponseEntity<>(new ClinicAdministratorDTO(admin), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Invalid data for clinical center administrator", HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @DeleteMapping(path="/delete/{id}" )
    public ResponseEntity<Void> deleteClinicAdministrator(@PathVariable Long id){
        ClinicAdministrator admin = clinicAdministratorService.findById(id);
        if (admin != null) {
            clinicAdministratorService.remove(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(path="/change" )
    public ResponseEntity changeClinicAdministratorInformation(@RequestBody ClinicAdministratorDTO clinicAdministratorDTO){

        ClinicAdministrator admin = clinicAdministratorService.getReference(clinicAdministratorDTO.getId());
        try {
            admin.setEmail(clinicAdministratorDTO.getEmail());
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>("This user does not exists!", HttpStatus.NOT_FOUND);
        }

        admin.setName(clinicAdministratorDTO.getName());
        admin.setSurname(clinicAdministratorDTO.getSurname());
        admin.setAddress(clinicAdministratorDTO.getAddress());
        admin.setCity(clinicAdministratorDTO.getCity());
        admin.setState(clinicAdministratorDTO.getState());
        admin.setPhoneNumber(clinicAdministratorDTO.getPhoneNumber());
        admin.setUpin(clinicAdministratorDTO.getUpin());
        admin.setClinic( clinicService.findOne(clinicAdministratorDTO.getClinic_id()) );

        clinicAdministratorService.save(admin);

        return new ResponseEntity<>(new ClinicAdministratorDTO(admin), HttpStatus.OK);
    }
}
