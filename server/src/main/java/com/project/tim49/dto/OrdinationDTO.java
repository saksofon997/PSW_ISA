package com.project.tim49.dto;

import com.project.tim49.model.Ordination;

public class OrdinationDTO {

    private Long id;
    private String name;
    private String number;
    private Long clinic_id;

    public OrdinationDTO() {

    }

    public OrdinationDTO(Long id, String name, String number, Long clinic_id) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.clinic_id = clinic_id;
    }

    public OrdinationDTO(Ordination ord) {
        this.id = ord.getId();
        this.name = ord.getName();
        this.number = ord.getNumber();
        this.clinic_id = ord.getClinic().getId();
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

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Long getClinic_id() {
        return clinic_id;
    }

    public void setClinic_id(Long clinic_id) {
        this.clinic_id = clinic_id;
    }
}
