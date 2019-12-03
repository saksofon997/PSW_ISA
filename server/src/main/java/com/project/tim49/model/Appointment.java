package com.project.tim49.model; /***********************************************************************
 * Module:  Appointment.java
 * Author:  TIM 49
 * Purpose: Defines the Class Appointment
 ***********************************************************************/

import javax.persistence.*;

@Entity
@Table
@Inheritance( strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="appointment_type")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "starting_date_and_time", nullable = false)
    private long startingDateAndTime;

    @Column(name = "ending_date_and_time", nullable = false)
    private long endingDateAndTime;

    @Column(name = "duration", nullable = false)
    private long duration;

    @Column(name = "price", nullable = false)
    private double price;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ordination_id")
    public Ordination ordination;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "clinic_id")
    public Clinic clinic;

    // NEEDED?
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    public Patient patient     ;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "type_of_examination_id", referencedColumnName = "id")
    public TypeOfExamination typeOfExamination;

    @Column(name = "completed", nullable = false)
    private boolean completed;

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

    public TypeOfExamination getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExamination typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public long getEndingDateAndTime() {
        return endingDateAndTime;
    }

    public void setEndingDateAndTime(long endingDateAndTime) {
        this.endingDateAndTime = endingDateAndTime;
    }
}
