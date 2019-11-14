package com.project.tim49.Controller;

import com.project.tim49.Dto.ClinicAdministratorDTO;
import com.project.tim49.Model.Clinic;
import com.project.tim49.Model.ClinicAdministrator;
import com.project.tim49.Service.ClinicAdministratorService;
import com.project.tim49.Service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "clinicAdmin")
public class ClinicAdministratorController {

    @Autowired
    private ClinicAdministratorService clinicAdministratorService;
    @Autowired
    private ClinicService clinicService;

    @GetMapping(path="" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ClinicAdministrator>> getClinic() {
        return new ResponseEntity<List<ClinicAdministrator>>(clinicAdministratorService.findAll(), HttpStatus.OK);
    }

    @PostMapping(path="/add" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClinicAdministratorDTO> addClinicAdministrator(@RequestBody ClinicAdministratorDTO clinicAdministratorDTO){

        System.out.println(clinicAdministratorDTO.getClinic_id());
        ClinicAdministrator check = clinicAdministratorService.findOneByEmail(clinicAdministratorDTO.getEmail());
        if (check != null) {
            HttpHeaders hdr = new HttpHeaders();
            hdr.set("ErrorText", "User with this email already exists!");
            return new ResponseEntity<>(null, hdr, HttpStatus.NOT_ACCEPTABLE);
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


        admin.setClinic( clinicService.findOne(clinicAdministratorDTO.getClinic_id()) );

        admin.setRole("ClinicAdmin");
        admin.setPassword("ClinicalCenterDefaultPassword");

        admin = clinicAdministratorService.save(admin);
        if (admin != null){
            return new ResponseEntity<>(new ClinicAdministratorDTO(admin), HttpStatus.CREATED);
        } else {
            HttpHeaders hdr = new HttpHeaders();
            hdr.set("ErrorText", "Invalid data for clinical center administrator");
            return new ResponseEntity<>(null, hdr, HttpStatus.NOT_ACCEPTABLE);
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
    public ResponseEntity<ClinicAdministratorDTO> changeClinicAdministratorInformation(@RequestBody ClinicAdministratorDTO clinicAdministratorDTO){

        ClinicAdministrator admin = clinicAdministratorService.getReference(clinicAdministratorDTO.getId());
        try {
            admin.setEmail(clinicAdministratorDTO.getEmail());
        } catch (EntityNotFoundException e) {
            HttpHeaders hdr = new HttpHeaders();
            hdr.set("ErrorText", "This user does not exists!");
            return new ResponseEntity<>(null, hdr, HttpStatus.NOT_ACCEPTABLE);
        }

        admin.setEmail(clinicAdministratorDTO.getEmail());
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
