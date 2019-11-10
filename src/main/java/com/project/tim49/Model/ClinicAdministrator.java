package com.project.tim49.Model; /***********************************************************************
 * Module:  ClinicAdministrator.java
 * Author:  TIM 49
 * Purpose: Defines the Class ClinicAdministrator
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class ClinicAdministrator extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Clinic clinic;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

}