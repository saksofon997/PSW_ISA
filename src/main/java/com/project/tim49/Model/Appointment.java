package com.project.tim49.Model; /***********************************************************************
 * Module:  Appointment.java
 * Author:  TIM 49
 * Purpose: Defines the Class Appointment
 ***********************************************************************/

import javax.persistence.Id;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long startingDateAndTime;
    private long duration;
    private double price;

    /**
     * @pdRoleInfo migr=no name=Ordination assc=association4 mult=1..1
     */
    public Ordination ordination;
    /**
     * @pdRoleInfo migr=no name=TypeOfExamination assc=association19 mult=1..1
     */
    public Clinic clinic;
    public Patient patient;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getStartingDateAndTime() {
        return startingDateAndTime;
    }

    public void setStartingDateAndTime(long startingDateAndTime) {
        this.startingDateAndTime = startingDateAndTime;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Ordination getOrdination() {
        return ordination;
    }

    public void setOrdination(Ordination ordination) {
        this.ordination = ordination;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

}