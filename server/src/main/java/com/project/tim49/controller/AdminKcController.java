package com.project.tim49.controller;
import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.ClinicAdministrator;
import com.project.tim49.service.ClinicCenterAdminService;
import com.project.tim49.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;

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
    @PreAuthorize("hasAuthority('ADMINCC')")
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

    @PutMapping(path = "/editClinic/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity editClinic(@RequestBody ClinicDTO clinicDTO, @PathVariable Long id) {
        if (clinicDTO != null) {
            try {
                clinicService.changeClinicInfo(clinicDTO);
                return new ResponseEntity<>(clinicDTO,
                        HttpStatus.OK);
            } catch (ValidationException e) {
                return new ResponseEntity<>(e.getMessage(),
                        HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>("Invalid request data!",
                    HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping(path = "/deleteClinic/{id}")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity deleteClinic(@PathVariable Long id) {
        boolean deleted = clinicService.deleteClinic(id);
        if (deleted){
            return new ResponseEntity<>("Clinic deletion successful!",
                    HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Clinic deletion NOT successful!",
                    HttpStatus.BAD_REQUEST);
        }


    }

    @GetMapping(path = "/getClinics",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ClinicDTO>> getClinic() {
        List<Clinic> clinics = clinicService.findAll();

        List<ClinicDTO> clinicsDTO = new ArrayList<>();
        for (Clinic clinic : clinics) {
            clinicsDTO.add(new ClinicDTO(clinic));
        }
        return new ResponseEntity<List<ClinicDTO>>(clinicsDTO, HttpStatus.OK);
    }

    @GetMapping(path = "/getClinicAdmins/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity getClinicAdmins(@PathVariable Long id) {
        Clinic clinic = clinicService.findOne(id);

        if (clinic == null) {
            return new ResponseEntity<>("No clinic with this id", HttpStatus.NOT_ACCEPTABLE);
        }

        List<ClinicAdministrator> admins = clinic.getClinicAdministrator();

        List<ClinicAdministratorDTO> adminsDTO = new ArrayList<>();
        for (ClinicAdministrator admin : admins) {
            adminsDTO.add(new ClinicAdministratorDTO(admin));
        }

        if (admins != null) {
            return new ResponseEntity<>(adminsDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(adminsDTO, HttpStatus.OK);
        }
    }
    @GetMapping(path="/getAdminKc/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity getAdminKc(@PathVariable Long id) {
        UserDTO admin=clinicCenterAdminService.findById(id);
       return new ResponseEntity<>(admin,HttpStatus.OK);

    }
    @PutMapping(path="/change", consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
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
