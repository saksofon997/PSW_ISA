package com.project.tim49.dto;

import com.project.tim49.model.TypeOfExamination;

public class TypeOfExaminationDTO {
    private Long id;

    private String name;

    private Long clinic_id;

    private float price;

    public TypeOfExaminationDTO() {
    }

    public TypeOfExaminationDTO(TypeOfExamination toe) {
        this.id = toe.getId();
        this.name = toe.getName();
        this.price = toe.getPrice();
        this.clinic_id = toe.getClinic_id().getId();
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
}
