package com.project.tim49.model;
/***********************************************************************
 * Module:  AppointmentRequest.java
 * Author:  TIM 49
 * Purpose: Defines the Class AppointmentRequest
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class AppointmentRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "approved", nullable = false)
    private boolean approved;

    @Column(name = "startingDateAndTime", nullable = false)
    private long startingDateAndTime;

    @Column(name = "duration", nullable = false)
    private long duration;

    @Column(name = "price", nullable = false)
    private double price;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    public Patient patient;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ordination_id", referencedColumnName = "id")
    public Ordination ordination;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "typeOfExamination_id", referencedColumnName = "id")
    public TypeOfExamination typeOfExamination;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
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

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Ordination getOrdination() {
        return ordination;
    }

    public void setOrdination(Ordination ordination) {
        this.ordination = ordination;
    }

    public TypeOfExamination getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExamination typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }
}
