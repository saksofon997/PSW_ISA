package com.project.tim49.model; /***********************************************************************
 * Module:  Appointment.java
 * Author:  TIM 49
 * Purpose: Defines the Class Appointment
 ***********************************************************************/

import com.project.tim49.repository.DoctorRepository;
import com.project.tim49.service.DoctorService;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.print.Doc;
import java.util.List;
import java.util.Set;

@Entity
//@Table
//@Inheritance( strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name="appointment_type")
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

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "ordination_id")
    public Ordination ordination;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "clinic_id")
    public Clinic clinic;

    // NEEDED?
    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    public Patient patient;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "type_of_examination_id", referencedColumnName = "id")
    public TypeOfExamination typeOfExamination;

    @Column(name = "completed", nullable = false)
    private boolean completed;

    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Doctor.class)
    @JoinTable(name = "appointment_doctors", joinColumns = @JoinColumn(name = "appointment_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id"),
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    public Set<Doctor> doctors;

//    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Patient.class)
//    @JoinTable(name = "patients_pending_appointments", inverseJoinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"), joinColumns = @JoinColumn(name = "appointment_id", referencedColumnName = "id"))
//    public Set<Patient> patients;

    @Column(name = "deleted", nullable = false)
    private boolean deleted = false;

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

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}
