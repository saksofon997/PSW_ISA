package com.project.tim49.model; /***********************************************************************
 * Module:  Nurse.java
 * Author:  TIM 49
 * Purpose: Defines the Class Nurse
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class Nurse extends User {

    @Column(name = "shiftStart", nullable = false)
    private String shiftStart;

    @Column(name = "shiftEnd", nullable = false)
    private String shiftEnd;

    @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    public Clinic clinic;

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
}
