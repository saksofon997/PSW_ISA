package com.project.tim49.controller;
import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.RegistrationDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.ClinicAdministrator;
import com.project.tim49.model.ClinicCenterAdministrator;
import com.project.tim49.service.ClinicCenterAdminService;
import com.project.tim49.service.ClinicService;
import com.project.tim49.service.EmailService;
import com.project.tim49.service.UserService;
import org.hibernate.StaleObjectStateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.persistence.OptimisticLockException;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

/**
 * ExampleController
 *
 * @author Petar Basic
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/admin")
public class AdminKcController {

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private ClinicCenterAdminService clinicCenterAdminService;
    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;

    @PostMapping(path="/addClinic" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity saveClinic(@RequestBody ClinicDTO clinicDTO) {
        if(clinicDTO!= null){
            try {
                clinicService.save(clinicDTO);
            } catch (ValidationException e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }else{
            return new ResponseEntity<>("Invalid clinic", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity<>(clinicDTO, HttpStatus.CREATED);
    }

    @PutMapping(path = "/editClinic", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC') or hasAuthority('ADMINC')")
    public ResponseEntity editClinic(@RequestBody ClinicDTO clinicDTO) {
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
        try{
            clinicService.deleteClinic(id);
        }catch (IllegalStateException | ValidationException e){
            return new ResponseEntity<>(e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(id,
                    HttpStatus.OK);
    }

    @PutMapping(path = "/rateClinic")
    @PreAuthorize("hasAuthority('PATIENT')")
    public ResponseEntity rateClinic(
            @RequestParam(value = "clinic_id", required = true) Long clinic_id,
            @RequestParam(value = "patient_id", required = true) Long patient_id,
            @RequestParam(value = "stars", required = true) int stars
    ) {
        try {
            this.clinicService.rateClinic(clinic_id, patient_id, stars);
            return new ResponseEntity<>(clinic_id, HttpStatus.OK);
        } catch (ValidationException | NoSuchElementException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (StaleObjectStateException e){
            return new ResponseEntity<>("Try again", HttpStatus.SERVICE_UNAVAILABLE);
        }
    }

    @GetMapping(path = "/getClinics",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC') or hasAuthority('ADMINC') or hasAuthority('PATIENT')")
    public ResponseEntity<List<ClinicDTO>> getClinic() {
        return new ResponseEntity<List<ClinicDTO>>(clinicService.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/getClinic/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC') or hasAuthority('ADMINC') or hasAuthority('PATIENT')")
    public ResponseEntity getClinicById(@PathVariable Long id) {
        if(id != null) {
            ClinicDTO dto = clinicService.findOneDTO(id);
            if (dto != null) {
                return new ResponseEntity<>(dto, HttpStatus.OK);
            }
            return new ResponseEntity<>("No clinic with this id", HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>("ID is null!",
                HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @GetMapping(path = "/getClinicAdmins/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity getClinicAdmins(@PathVariable Long id) {
        if (id == null) {
            return new ResponseEntity<>("Can not resolve clinic id:"+id, HttpStatus.NOT_ACCEPTABLE);
        }
        try{
            List<ClinicAdministratorDTO> adminsDTO = clinicService.getClinicAdmins(id);
            return new ResponseEntity<>(adminsDTO, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>("Failed, clinic not found!",
                    HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping(path="/getAdminKc/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity getAdminKc(@PathVariable Long id) {
        UserDTO admin=clinicCenterAdminService.findById(id);
       return new ResponseEntity<>(admin,HttpStatus.OK);
    }

    @GetMapping(path="/getAdminsKc/{id}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity getAdminsKc(@PathVariable Long id) {
        if(id != 1){
            return new ResponseEntity<>("Not authorized to access this information.", HttpStatus.UNAUTHORIZED);
        }
        List<UserDTO> admins=clinicCenterAdminService.findAll();
        return new ResponseEntity<>(admins,HttpStatus.OK);
    }
    @PostMapping(path="/addAdmin" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity addAdmin(@RequestBody UserDTO userDTO) {
        if(userDTO!= null){
            try {
                clinicCenterAdminService.addAdmin(userDTO);
            } catch (ValidationException e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }else{
            return new ResponseEntity<>("Invalid administrator.", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }
    @DeleteMapping(path="/deleteAdmin/{id}/{idToDelete}" ,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity deleteAdminKc(@PathVariable Long id, @PathVariable Long idToDelete) {
        if(id != 1 || idToDelete == 1){
            return new ResponseEntity<>("Not authorized to access this information.", HttpStatus.UNAUTHORIZED);
        }
        clinicCenterAdminService.remove(idToDelete);
        return new ResponseEntity<>(idToDelete,HttpStatus.OK);
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
    @GetMapping(path = "/getRegistrationRequests",
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity<List<RegistrationDTO>> getRegistrationRequests() {
        List<RegistrationDTO> registrationDTOS = new ArrayList<>();
        registrationDTOS = userService.getRegistrationRequests();
        return new ResponseEntity<>(registrationDTOS, HttpStatus.OK);
    }
    @PutMapping(path="/approveRequest", consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity approveRequest(@RequestBody RegistrationDTO regDTO) {
        RegistrationDTO registrationDTO = new RegistrationDTO();
        try {
            registrationDTO =  userService.approveRegistrationRequest(regDTO);
        }catch (ValidationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
        try {
            this.emailService.sendConfirmationEmail(regDTO);
        }catch(InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
        return new ResponseEntity<>(registrationDTO, HttpStatus.OK);
    }
    @PutMapping(path = "/deleteRequest/{id}")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity deleteRequest(@PathVariable Long id,@RequestBody String message) {
        RegistrationDTO deleted = new RegistrationDTO();
        try{
            deleted = userService.deleteRegistrationRequest(id);
            this.emailService.sendRegistrationDeniedEmail(deleted,message);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>("Registration request deletion failed, request not found!",
                    HttpStatus.NOT_FOUND);
        }catch(SecurityException e){
            return new ResponseEntity<>("Registration request already approved!",
                    HttpStatus.NOT_ACCEPTABLE);
        }catch(InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
        return new ResponseEntity<>(deleted, HttpStatus.OK);
    }
}
