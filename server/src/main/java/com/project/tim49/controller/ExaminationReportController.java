package com.project.tim49.controller;

import com.project.tim49.dto.ExaminationReportDTO;
import com.project.tim49.model.ExaminationReport;
import com.project.tim49.service.ExaminationReportService;
import com.project.tim49.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/examination")
public class ExaminationReportController {
    @Autowired
    ExaminationReportService reportService;

    @PostMapping(path="/submitReport/{id}" ,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('DOCTOR')")
    public ResponseEntity submitExaminationReport(@PathVariable Long id, @RequestBody ExaminationReportDTO examinationReportDTO) {
        if (examinationReportDTO == null){
            return new ResponseEntity<>("Invalid report", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        try {
            reportService.submitReport(examinationReportDTO, id);
            return new ResponseEntity<>(examinationReportDTO, HttpStatus.CREATED);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (NumberFormatException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
