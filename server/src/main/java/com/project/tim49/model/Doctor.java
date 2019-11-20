package com.project.tim49.model; /***********************************************************************
 * Module:  Doctor.java
 * Author:  TIM 49
 * Purpose: Defines the Class Doctor
 ***********************************************************************/

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Doctor extends User {
    @Column(name = "shift_start", nullable = false)
    private String shiftStart;

    @Column(name = "shift_end", nullable = false)
    private String shiftEnd;

    @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
    public Clinic clinic;

    @OneToMany(fetch = FetchType.LAZY)
    public List<Appointment> appointments = new ArrayList<Appointment>();

    @Column(name = "number_of_stars")
    private int numberOfStars;

    @Column(name = "number_of_reviews")
    private int numberOfReviews;

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

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
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
