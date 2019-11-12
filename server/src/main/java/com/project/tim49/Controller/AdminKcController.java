package com.project.tim49.Controller;
import com.project.tim49.Dto.ClinicDTO;
import com.project.tim49.Model.Clinic;
import com.project.tim49.Service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * ExampleController
 *
 * @author Petar Basic
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminKcController {

    @Autowired
    private ClinicService clinicService;

    @GetMapping("/admin/show")
    public ResponseEntity<String> get() {
        System.out.println("ovde je dosao sad");
        return ResponseEntity.ok("Hello World!");

    }
    @PostMapping(path="/admin/addClinic" ,
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

}
