package com.project.tim49.Controller;

import com.project.tim49.Dto.MedicationDTO;
import com.project.tim49.Model.MedicationDictionary;
import com.project.tim49.Service.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/medication")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @GetMapping
    public ResponseEntity<List<MedicationDictionary>> getMedications() {

        List<MedicationDictionary> medications = medicationService.findAll();

        return new ResponseEntity<>(medications, HttpStatus.OK);
    }

    @PostMapping(consumes = "application/json", produces= "application/json")
    public ResponseEntity addMedication(@RequestBody MedicationDTO medicationDTO) {
        System.out.println(medicationDTO.getCode());

        if (medicationDTO.getCode() == null || medicationDTO.getName() == null || medicationDTO.getCode().length() != 4){
            return new ResponseEntity<>("Invalid input data", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        if(medicationDTO != null) {
            MedicationDictionary medication =
                    medicationService.findOneByCode(medicationDTO.getCode());

            if (medication == null) {
                medication = new MedicationDictionary();
                medication.setCode(medicationDTO.getCode());
                medication.setName(medicationDTO.getName());
                medicationService.save(medication);

                return new ResponseEntity<>(medicationDTO, HttpStatus.CREATED);
            }
            return new ResponseEntity<>("Medication with this code already exists", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>("Bad request", HttpStatus.BAD_REQUEST);
    }

    @PutMapping(path="/change/{id}", consumes = "application/json", produces= "application/json")
    public ResponseEntity modifyMedication(@RequestBody MedicationDTO medicationDTO, @PathVariable("id") Long id) {

        if(medicationDTO != null) {
            MedicationDictionary codeCheck = medicationService.findOneByCode(medicationDTO.getCode());

            if (codeCheck == null){
                MedicationDictionary medication = medicationService.getReference(id);
                try {
                    medication.setCode(medicationDTO.getCode());
                    medication.setName(medicationDTO.getName());
                    medicationService.save(medication);

                    return new ResponseEntity<>(medicationDTO, HttpStatus.CREATED);
                } catch (EntityNotFoundException e) {
                    return new ResponseEntity<>("Medication doesn't exist", HttpStatus.NOT_FOUND);
                }
            }

            return new ResponseEntity<>("Medication with this code already exists", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Bad request", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(path="/delete/{id}")
    public ResponseEntity deleteMedication(@PathVariable("id") Long id) {

        MedicationDictionary medication = medicationService.findById(id);

        if(medication != null) {
            medicationService.remove(medication.getId());

            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("Medication doesn't exist", HttpStatus.NOT_FOUND);
    }
}
