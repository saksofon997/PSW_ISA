package com.project.tim49.Model; /***********************************************************************
 * Module:  Nurse.java
 * Author:  TIM 49
 * Purpose: Defines the Class Nurse
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/** @pdOid eef85ca3-15c2-485a-9074-d91c27da1a21 */
public class Nurse extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String shiftStart;
    /** @pdOid 80368039-ebd0-4125-ab78-e15bf4157463 */
    private String shiftEnd;
    public Clinic clinic;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}