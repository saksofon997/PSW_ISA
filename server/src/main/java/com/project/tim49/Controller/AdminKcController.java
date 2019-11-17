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
import javax.xml.bind.ValidationException;
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

    @PutMapping(path = "/editClinic/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity editClinic(@RequestBody ClinicDTO clinicDTO, @PathVariable Long id) {

        if (clinicDTO != null) {

            Clinic zaIzmenu = clinicService.getReference(clinicDTO.getId());

            if(zaIzmenu != null) {
                boolean uspeh = clinicService.changeClinicInfo(zaIzmenu,
                        clinicDTO);
                if(uspeh)
                    return new ResponseEntity<>("Clinic edit successful",
                        HttpStatus.OK);
                else
                    return new ResponseEntity<>("Clinic edit NOT successful!",
                            HttpStatus.OK);
            }
            return new ResponseEntity<>("Clinic not found!",
                    HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Request has null value!",
                HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(path="/deleteClinic/{id}")
    public ResponseEntity deleteClinic(@PathVariable Long id) {

        if(clinicService.deleteClinic(id))
            return new ResponseEntity<>("Clinic deletion successful!",
                    HttpStatus.OK);
        else
            return new ResponseEntity<>("Clinic deletion NOT successful!",
                    HttpStatus.BAD_REQUEST);

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

}
