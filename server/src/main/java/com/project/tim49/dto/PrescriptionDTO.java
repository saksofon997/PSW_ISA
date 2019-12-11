package com.project.tim49.dto;

import com.project.tim49.model.Prescription;

public class PrescriptionDTO {
    private Long id;

    private Long medication_id;

    private Long nurse_id;

    private Long doctor_id;

    private boolean approved;

    public PrescriptionDTO(Long id, Long medication_id, Long nurse_id, Long doctor_id, boolean approved) {
        this.id = id;
        this.medication_id = medication_id;
        this.nurse_id = nurse_id;
        this.doctor_id = doctor_id;
        this.approved = approved;
    }

    public PrescriptionDTO(Prescription prescription) {
        this.id = prescription.getId();
        this.medication_id = prescription.getMedication().getId();
        this.nurse_id = prescription.getApproves().getId();
        this.doctor_id = prescription.getPerforms().getId();
        this.approved = prescription.isApproved();
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
