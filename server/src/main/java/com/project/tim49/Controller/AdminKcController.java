package com.project.tim49.Controller;
import com.project.tim49.Dto.ClinicAdministratorDTO;
import com.project.tim49.Dto.ClinicDTO;
import com.project.tim49.Dto.MedicationDTO;
import com.project.tim49.Dto.UserDTO;
import com.project.tim49.Model.Clinic;
import com.project.tim49.Model.ClinicAdministrator;
import com.project.tim49.Model.MedicationDictionary;
import com.project.tim49.Model.User;
import com.project.tim49.Service.ClinicAdministratorService;
import com.project.tim49.Service.ClinicCenterAdminService;
import com.project.tim49.Service.ClinicService;
import com.sun.org.apache.regexp.internal.RE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.ArrayList;
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
    private ClinicCenterAdminService clinicCenterAdminService;

    @PostMapping(path="/addClinic" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClinicDTO> saveClinic(@RequestBody ClinicDTO clinicDTO) {

        Clinic clinic = new Clinic();
        clinic.setName(clinicDTO.getName());
        clinic.setAddress(clinicDTO.getAddress());
        clinic.setCity(clinicDTO.getCity());
        clinic.setState(clinicDTO.getState());
        clinic.setDescription(clinicDTO.getDescription());
        clinic = clinicService.save(clinic);

        return new ResponseEntity<>(new ClinicDTO(clinic), HttpStatus.CREATED);
    }
    @GetMapping(path="/getClinics" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ClinicDTO>> getClinic() {
        List<Clinic> clinics = clinicService.findAll();

        List<ClinicDTO> clinicsDTO = new ArrayList<>();
        for (Clinic clinic: clinics ) {
            clinicsDTO.add( new ClinicDTO(clinic));
        }
        return new ResponseEntity<List<ClinicDTO>>(clinicsDTO, HttpStatus.OK);
    }
    @GetMapping(path="/getClinicAdmins/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getClinicAdmins(@PathVariable Long id) {
        Clinic clinic = clinicService.findOne(id);

        if (clinic == null){
            return new ResponseEntity<>("No clinic with this id", HttpStatus.NOT_ACCEPTABLE);
        }

        List<ClinicAdministrator> admins = clinic.getClinicAdministrator();

        List<ClinicAdministratorDTO> adminsDTO = new ArrayList<>();
        for (ClinicAdministrator admin: admins ) {
            adminsDTO.add( new ClinicAdministratorDTO(admin));
        }

        if (admins != null) {
            return new ResponseEntity<>(adminsDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(adminsDTO, HttpStatus.OK);
        }
    }
    @GetMapping(path="/getAdminKc/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAdminKc(@PathVariable Long id) {
        UserDTO admin=clinicCenterAdminService.findById(id);
       return new ResponseEntity<>(admin,HttpStatus.OK);

    }
    @PutMapping(path="/change", consumes = "application/json", produces= "application/json")
    public ResponseEntity modifyAdminKc(@RequestBody UserDTO userDTO) {
        if(userDTO!= null){
            try {
                clinicCenterAdminService.changeAdminKc(userDTO);
                return new ResponseEntity<>(userDTO, HttpStatus.OK);
            }catch (ValidationException e){
                return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        return new ResponseEntity<>("Bad request", HttpStatus.BAD_REQUEST);
    }

}
