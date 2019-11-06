package com.project.tim49.Model; /***********************************************************************
 * Module:  VacationRequest.java
 * Author:  TIM 49
 * Purpose: Defines the Class VacationRequest
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/** @pdOid e420bd8b-eaf4-4f90-9054-a9588d5c8489 */
public class VacationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private User medicalStaff;
    /**
     * NE ZNAMO KAKO CEMO OVO - ZAVISI OD TEHNIKA KOJE CEMO KORISTITI U BAZI
     */
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getMedicalStaff() {
        return medicalStaff;
    }

    public void setMedicalStaff(User medicalStaff) {
        this.medicalStaff = medicalStaff;
    }
}