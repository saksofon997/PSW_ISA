package com.project.tim49.Controller;
import com.project.tim49.Dto.ClinicAdministratorDTO;
import com.project.tim49.Dto.ClinicDTO;
import com.project.tim49.Dto.UserDTO;
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

import java.util.List;
import java.util.Optional;

/**
 * ExampleController
 *
 * @author Petar Basic
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "admin")
public class AdminKcController {

    @Autowired
    private ClinicService clinicService;
    @Autowired
    private ClinicAdministratorService clinicAdministratorService;

    @GetMapping("/show")
    public ResponseEntity<String> get() {
        System.out.println("ovde je dosao sad");
        return ResponseEntity.ok("Hello World!");

    }
    @PostMapping(path="/addClinic" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClinicDTO> saveClinic(@RequestBody ClinicDTO clinicDTO) {

        Clinic clinic = new Clinic();
        clinic.setName(clinicDTO.getName());
        clinic.setAddress(clinicDTO.getAddress());
        clinic.setCity(clinicDTO.getCity());
        clinic.setState(clinicDTO.getState());
        clinic.setDescription(clinicDTO.getDescription());
        System.out.println("stigloSAD");
        clinic = clinicService.save(clinic);

        return new ResponseEntity<>(new ClinicDTO(clinic), HttpStatus.CREATED);
    }
    @GetMapping(path="/getClinics" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Clinic>> getClinic() {
        return new ResponseEntity<List<Clinic>>(clinicService.findAll(), HttpStatus.OK);
    }

    @PostMapping(path="/addClinicAdministrator" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClinicAdministratorDTO> addClinicAdministrator(@RequestBody ClinicAdministratorDTO clinicAdministratorDTO){

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
        admin.setClinic(clinicAdministratorDTO.getClinic());
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

    @DeleteMapping(path="/deleteClinicAdministrator/{id}" )
    public ResponseEntity<Void> deleteClinicAdministrator(@PathVariable Long id){
        ClinicAdministrator admin = clinicAdministratorService.findById(id);

        if (admin != null) {
            clinicAdministratorService.remove(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
