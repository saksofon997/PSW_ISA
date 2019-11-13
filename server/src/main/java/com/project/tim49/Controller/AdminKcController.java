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

import javax.persistence.EntityNotFoundException;
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

}
