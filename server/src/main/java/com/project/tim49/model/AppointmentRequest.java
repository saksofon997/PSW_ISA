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

    @Column(name = "starting_date_and_time", nullable = false)
    private long startingDateAndTime;

    @Column(name = "ending_date_and_time", nullable = false)
    private long endingDateAndTime;

    @Column(name = "duration", nullable = false)
    private long duration;

    @Column(name = "price", nullable = false)
    private double price;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "clinic_id")
    public Clinic clinic;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id")
    public Patient patient;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "doctor_id")
    public Doctor doctor;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "type_of_examination_id", referencedColumnName = "id")
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

    public long getEndingDateAndTime() {
        return endingDateAndTime;
    }

    public void setEndingDateAndTime(long endingDateAndTime) {
        this.endingDateAndTime = endingDateAndTime;
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

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public TypeOfExamination getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExamination typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }
}
