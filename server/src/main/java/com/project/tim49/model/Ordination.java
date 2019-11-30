package com.project.tim49.model; /***********************************************************************
 * Module:  Ordination.java
 * Author:  TIM 49
 * Purpose: Defines the Class Ordination
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class Ordination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "number")
    private String number;

    @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    public Clinic clinic;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }
}
