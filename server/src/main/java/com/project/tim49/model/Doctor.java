package com.project.tim49.model; /***********************************************************************
 * Module:  Doctor.java
 * Author:  TIM 49
 * Purpose: Defines the Class Doctor
 ***********************************************************************/

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
public class Doctor extends User {
    @Column(name = "shift_start", nullable = false)
    private String shiftStart;

    @Column(name = "shift_end", nullable = false)
    private String shiftEnd;

    @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
    public Clinic clinic;

//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY)
//    public List<Appointment> appointments = new ArrayList<Appointment>();
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "doctores", fetch = FetchType.LAZY)
//    public List<Appointment> appointments = new ArrayList<Appointment>();

    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Appointment.class)
    @JoinTable(name = "appointment_doctors", joinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "appointment_id", referencedColumnName = "id"),
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    public Set<Appointment> appointments;

    @OneToMany(mappedBy = "medicalStaff", fetch = FetchType.LAZY)
    public List<Vacation> vacations = new ArrayList<Vacation>();

    @Column(name = "number_of_stars")
    private int numberOfStars;

    @Column(name = "number_of_reviews")
    private int numberOfReviews;

    public List<Vacation> getVacations() {
        return vacations;
    }

    public void setVacations(List<Vacation> vacations) {
        this.vacations = vacations;
    }
    public String getShiftStart() {
        return shiftStart;
    }

    public void setShiftStart(String shiftStart) {
        this.shiftStart = shiftStart;
    }

    public String getShiftEnd() {
        return shiftEnd;
    }

    public void setShiftEnd(String shiftEnd) {
        this.shiftEnd = shiftEnd;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Set<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(Set<Appointment> appointments) {
        this.appointments = appointments;
    }

    public int getNumberOfStars() {
        return numberOfStars;
    }

    public void setNumberOfStars(int numberOfStars) {
        this.numberOfStars = numberOfStars;
    }

    public int getNumberOfReviews() {
        return numberOfReviews;
    }

    public void setNumberOfReviews(int numberOfReviews) {
        this.numberOfReviews = numberOfReviews;
    }
}
