package com.project.tim49.Controller;

import com.project.tim49.Dto.DiagnosisDTO;
import com.project.tim49.Model.DiagnosisDictionary;
import com.project.tim49.Service.ClinicService;
import com.project.tim49.Service.DiagnosisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/diagnosis")
public class DiagnosisController {

    @Autowired
    private DiagnosisService diagnosisService;

    @GetMapping
    public ResponseEntity<List<DiagnosisDictionary>> getDiagnosis() {

        List<DiagnosisDictionary> lista = diagnosisService.findAll();

        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping(consumes = "application/json", produces= "application/json")
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
    public ResponseEntity modifyDiagnosis(@RequestBody DiagnosisDTO diagnosisDTO, @PathVariable("code") String code) {

        if(diagnosisDTO != null) {
            DiagnosisDictionary temp = diagnosisService.findOne(code);

            if (temp != null) {
                diagnosisService.remove(temp.getId());
                DiagnosisDictionary tba = new DiagnosisDictionary();
                tba.setCode(diagnosisDTO.getCode());
                tba.setDescription(diagnosisDTO.getCode());
                diagnosisService.save(tba);

                return new ResponseEntity<>(diagnosisDTO, HttpStatus.CREATED);
            }
            return new ResponseEntity<>("Diagnosis doesn't exist", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Bad request", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(path="/delete/{code}")
    public ResponseEntity deleteDiagnosis(@PathVariable("code") String code) {

        DiagnosisDictionary temp = diagnosisService.findOne(code);

        if(temp != null) {
            diagnosisService.remove(temp.getId());

            return new ResponseEntity<>("Diagnosis deleted", HttpStatus.OK);
        }
        return new ResponseEntity<>("Diagnosis doesn't exist", HttpStatus.NOT_FOUND);
    }
}
