package com.project.tim49.controller;

import com.project.tim49.dto.ClinicBusinessDTO;
import com.project.tim49.dto.ClinicsSearchResultDTO;
import com.project.tim49.dto.OrdinationDTO;
import com.project.tim49.dto.TypeOfExaminationDTO;
import com.project.tim49.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/clinic")
public class ClinicController {

    @Autowired
    private ClinicService clinicService;

    @GetMapping("/searchClinics")
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('PATIENT')")
    public ResponseEntity getAllByQuery(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "address", required = false) String address,
            @RequestParam(value = "typeOfExamination", required = true) long toe_id,
            @RequestParam(value = "date", required = true) long date
    ) {
        List<ClinicsSearchResultDTO> clinics = clinicService.getByQuery(name, address, toe_id, date);
        return new ResponseEntity<>(clinics, HttpStatus.OK);
    }

    @GetMapping("/clinicsBusiness/{id}")
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('ADMINCC')")
    public ResponseEntity getClinicsBusiness(
            @PathVariable("id") Long clinic_id
    ) {
        List<ClinicBusinessDTO> returnVal = clinicService.getClinicBusiness(clinic_id);
        return new ResponseEntity<>(returnVal, HttpStatus.OK);
    }
}
