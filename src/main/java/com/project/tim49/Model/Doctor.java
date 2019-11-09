package com.project.tim49.Model; /***********************************************************************
 * Module:  Doctor.java
 * Author:  TIM 49
 * Purpose: Defines the Class Doctor
 ***********************************************************************/

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Doctor extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "shiftStart", nullable = false)
    private String shiftStart;

    @Column(name = "shiftEnd", nullable = false)
    private String shiftEnd;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    public Clinic clinic;

    @OneToMany(fetch = FetchType.LAZY)
    public List<Appointment> appointments = new ArrayList<Appointment>();

    @Column(name = "numberOfStars", nullable = false)
    private int numberOfStars;

    @Column(name = "numberOfReviews", nullable = false)
    private int numberOfReviews;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Appointment> getAppointment() {
        return appointments;
    }

    public void setAppointment(List<Appointment> appointment) {
        this.appointments = appointment;
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