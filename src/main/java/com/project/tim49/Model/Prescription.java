package com.project.tim49.Model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private MedicationDictionary medication;
    private Nurse approves;
    private Doctor performs;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public MedicationDictionary getMedication() {
        return medication;
    }

    public void setMedication(MedicationDictionary medication) {
        this.medication = medication;
    }

    public Nurse getApproves() {
        return approves;
    }

    public void setApproves(Nurse approves) {
        this.approves = approves;
    }

    public Doctor getPerforms() {
        return performs;
    }

    public void setPerforms(Doctor performs) {
        this.performs = performs;
    }
}
