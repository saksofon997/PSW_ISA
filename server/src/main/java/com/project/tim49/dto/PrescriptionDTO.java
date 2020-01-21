package com.project.tim49.dto;

import com.project.tim49.model.Prescription;

public class PrescriptionDTO {
    private Long id;

    private Long medication_id;
    private String medication_name;
    private String medication_code;

    private Long nurse_id;
    private String nurse_name;
    private String nurse_surname;

    private Long doctor_id;
    private String doctor_name;
    private String doctor_surname;

    private boolean approved;

    public PrescriptionDTO(){
        
    }

    public PrescriptionDTO(Long id, Long medication_id,String medication_code, String medication_name, Long nurse_id, String nurse_name, String nurse_surname, Long doctor_id, String doctor_name, String doctor_surname, boolean approved) {
        this.id = id;
        this.medication_id = medication_id;
        this.medication_code = medication_code;
        this.medication_name = medication_name;
        this.nurse_id = nurse_id;
        this.nurse_name = nurse_name;
        this.nurse_surname = nurse_surname;
        this.doctor_id = doctor_id;
        this.doctor_name = doctor_name;
        this.doctor_surname = doctor_surname;
        this.approved = approved;
    }

    public PrescriptionDTO(Prescription prescription) {
        this.id = prescription.getId();
        this.medication_id = prescription.getMedication().getId();
        this.medication_code = prescription.getMedication().getCode();
        this.medication_name = prescription.getMedication().getName();
        if(prescription.isApproved()){
            this.nurse_id = prescription.getApproves().getId();
            this.nurse_name = prescription.getApproves().getName();
            this.nurse_surname = prescription.getApproves().getSurname();
        }else {
            this.nurse_id = null;
            this.nurse_name = "";
            this.nurse_surname = "";
        }

        this.doctor_id = prescription.getPerforms().getId();
        this.doctor_name = prescription.getPerforms().getName();
        this.doctor_surname = prescription.getPerforms().getSurname();
        this.approved = prescription.isApproved();
    }

    public String getMedication_code() {
        return medication_code;
    }

    public void setMedication_code(String medication_code) {
        this.medication_code = medication_code;
    }

    public String getMedication_name() {
        return medication_name;
    }

    public void setMedication_name(String medication_name) {
        this.medication_name = medication_name;
    }

    public String getNurse_name() {
        return nurse_name;
    }

    public void setNurse_name(String nurse_name) {
        this.nurse_name = nurse_name;
    }

    public String getNurse_surname() {
        return nurse_surname;
    }

    public void setNurse_surname(String nurse_surname) {
        this.nurse_surname = nurse_surname;
    }

    public String getDoctor_name() {
        return doctor_name;
    }

    public void setDoctor_name(String doctor_name) {
        this.doctor_name = doctor_name;
    }

    public String getDoctor_surname() {
        return doctor_surname;
    }

    public void setDoctor_surname(String doctor_surname) {
        this.doctor_surname = doctor_surname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMedication_id() {
        return medication_id;
    }

    public void setMedication_id(Long medication_id) {
        this.medication_id = medication_id;
    }

    public Long getNurse_id() {
        return nurse_id;
    }

    public void setNurse_id(Long nurse_id) {
        this.nurse_id = nurse_id;
    }

    public Long getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(Long doctor_id) {
        this.doctor_id = doctor_id;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}
