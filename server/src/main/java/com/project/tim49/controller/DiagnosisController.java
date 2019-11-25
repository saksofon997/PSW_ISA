package com.project.tim49.controller;

import com.project.tim49.dto.DiagnosisDTO;
import com.project.tim49.model.DiagnosisDictionary;
import com.project.tim49.service.DiagnosisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/diagnosis")
public class DiagnosisController {

    @Autowired
    private DiagnosisService diagnosisService;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMINCC') or hasAuthority('DOCTOR') or hasAuthority('NURSE')")
    public ResponseEntity<List<DiagnosisDictionary>> getDiagnosis() {

        List<DiagnosisDictionary> lista = diagnosisService.findAll();

        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping(consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity addDiagnosis(@RequestBody DiagnosisDTO diagnosisDTO) {

        if(diagnosisDTO != null) {
            DiagnosisDictionary temp =
                    diagnosisService.findOne(diagnosisDTO.getCode());

            if (temp == null) {
                DiagnosisDictionary tba = new DiagnosisDictionary();
                tba.setCode(diagnosisDTO.getCode());
                diagnosisService.save(tba);

                return new ResponseEntity<>(diagnosisDTO, HttpStatus.CREATED);
            }
            return new ResponseEntity<>("Diagnosis already exists", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>("Bad request", HttpStatus.BAD_REQUEST);
    }

    @PutMapping(path="/change/{code}", consumes = "application/json", produces= "application/json")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity modifyDiagnosis(@RequestBody DiagnosisDTO diagnosisDTO, @PathVariable("code") String code) {
        if (diagnosisDTO != null) {
            try {
                diagnosisService.changeDiagnosisData(diagnosisDTO);
                return new ResponseEntity<>(diagnosisDTO,
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

    @DeleteMapping(path="/delete/{code}")
    @PreAuthorize("hasAuthority('ADMINCC')")
    public ResponseEntity deleteDiagnosis(@PathVariable("code") String code) {

        DiagnosisDictionary temp = diagnosisService.findOne(code);

        if(temp != null) {
            diagnosisService.remove(temp.getId());

            return new ResponseEntity<>(code, HttpStatus.OK);
        }
        return new ResponseEntity<>("Diagnosis doesn't exist", HttpStatus.NOT_FOUND);
    }
}
