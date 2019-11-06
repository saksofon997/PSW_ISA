package com.project.tim49.Model; /***********************************************************************
 * Module:  ClinicAdministrator.java
 * Author:  TIM 49
 * Purpose: Defines the Class ClinicAdministrator
 ***********************************************************************/

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class ClinicAdministrator extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Clinic clinic;

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}