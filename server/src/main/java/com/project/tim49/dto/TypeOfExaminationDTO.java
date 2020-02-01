package com.project.tim49.dto;

import com.project.tim49.model.ClinicTypeOfExamination;
import com.project.tim49.model.TypeOfExamination;

public class TypeOfExaminationDTO {
    private Long id;

    private String name;

    private Long clinic_id;

    private float price;

    private boolean operation;

    public TypeOfExaminationDTO() {
    }

    public TypeOfExaminationDTO(ClinicTypeOfExamination toe) {
        this.id = toe.getTypeOfExamination().getId();
        this.name = toe.getTypeOfExamination().getName();
        this.operation = toe.getTypeOfExamination().isOperation();
        this.price = toe.getPrice();
        this.clinic_id = toe.getClinic().getId();
    }

    public TypeOfExaminationDTO(TypeOfExamination toe) {
        this.id = toe.getId();
        this.name = toe.getName();
        this.operation = toe.isOperation();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getClinic_id() {
        return clinic_id;
    }

    public void setClinic_id(Long clinic_id) {
        this.clinic_id = clinic_id;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public boolean isOperation() {
        return operation;
    }

    public void setOperation(boolean operation) {
        this.operation = operation;
    }
}
