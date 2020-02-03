package com.project.tim49.controller;

import com.project.tim49.dto.*;
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

    @GetMapping("/earnings/{periodStart}/{periodEnd}/{clinic_id}")
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('ADMINCC')")
    public ResponseEntity getEarnings(
            @PathVariable("clinic_id") Long clinic_id,
            @PathVariable("periodStart") long periodStart,
            @PathVariable("periodEnd") long periodEnd
    ) {
        float returnVal = clinicService.getClinicEarnings(periodStart, periodEnd, clinic_id);
        return new ResponseEntity<>(returnVal, HttpStatus.OK);
    }

    @GetMapping("/chartData/{mode}/{periodStart}/{periodEnd}/{clinic_id}")
    @PreAuthorize("hasAuthority('ADMINC') or hasAuthority('ADMINCC')")
    public ResponseEntity getChartDayData(
            @PathVariable("mode") String mode,
            @PathVariable("clinic_id") Long clinic_id,
            @PathVariable("periodStart") long periodStart,
            @PathVariable("periodEnd") long periodEnd
    ) {
        if (mode == null){
            return new ResponseEntity<>(mode, HttpStatus.BAD_REQUEST);
        }
        switch (mode){
            case "DAY": {
                List<ChartDataDTO> returnVal = clinicService.getDayChartData(periodStart, periodEnd, clinic_id);
                return new ResponseEntity<>(returnVal, HttpStatus.OK);
            }
            case "WEEK": {
                List<ChartDataDTO> returnVal = clinicService.getWeekChartData(periodStart, periodEnd, clinic_id);
                return new ResponseEntity<>(returnVal, HttpStatus.OK);
            }
            case "MONTH": {
                List<ChartDataDTO> returnVal = clinicService.getMonthChartData(periodStart, periodEnd, clinic_id);
                return new ResponseEntity<>(returnVal, HttpStatus.OK);
            }
            default:
                return new ResponseEntity<>(mode, HttpStatus.BAD_REQUEST);
        }
    }
}
