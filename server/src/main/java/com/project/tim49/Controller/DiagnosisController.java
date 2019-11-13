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
@RequestMapping(value = "api/diagnosis")
public class DiagnosisController {

    @Autowired
    private DiagnosisService diagnosisService;

    @GetMapping
    public ResponseEntity<List<DiagnosisDictionary>> getDiagnosis() {

        List<DiagnosisDictionary> lista = diagnosisService.findAll();

        return new ResponseEntity<>(lista, HttpStatus.CREATED);
    }

    @PostMapping(consumes = "application/json", produces= "application/json")
    public ResponseEntity<DiagnosisDTO> addDiagnosis(DiagnosisDTO diagnosisDTO) {

        HttpHeaders hdr = new HttpHeaders();

        if(diagnosisDTO != null) {
            DiagnosisDictionary temp =
                    diagnosisService.findOne(diagnosisDTO.getCode());

            if (temp == null) {
                DiagnosisDictionary tba = new DiagnosisDictionary();
                tba.setCode(diagnosisDTO.getCode());
                diagnosisService.save(tba);

                return new ResponseEntity<>(diagnosisDTO, HttpStatus.CREATED);
            }
            hdr.set("ErrorText", "Diagnosis already exists");
            return new ResponseEntity<>(null, hdr, HttpStatus.CREATED);
        }
        hdr.set("ErrorText", "Bad request");
        return new ResponseEntity<>(null, hdr, HttpStatus.CREATED);
    }

    @PutMapping(path="/change/{code}", consumes = "application/json", produces= "application/json")
    public ResponseEntity<DiagnosisDTO> modifyDiagnosis(DiagnosisDTO diagnosisDTO, @PathVariable("code") String code) {

        HttpHeaders hdr = new HttpHeaders();

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
            hdr.set("ErrorText", "Diagnosis doesn't exist");
            return new ResponseEntity<>(null, hdr, HttpStatus.CREATED);
        }
        hdr.set("ErrorText", "Bad request");
        return new ResponseEntity<>(null, hdr, HttpStatus.CREATED);
    }

    @DeleteMapping(path="/delete/{code}")
    public ResponseEntity deleteDiagnosis(@PathVariable("code") String code) {

        DiagnosisDictionary temp = diagnosisService.findOne(code);

        HttpHeaders hdr = new HttpHeaders();

        if(temp != null) {
            diagnosisService.remove(temp.getId());
            hdr.set("SuccessText", "Diagnosis deleted");

            return new ResponseEntity<>(null, hdr, HttpStatus.CREATED);
        }
        hdr.set("ErrorText", "Diagnosis doesn't exist");
        return new ResponseEntity<>(null, hdr, HttpStatus.CREATED);
    }
}
