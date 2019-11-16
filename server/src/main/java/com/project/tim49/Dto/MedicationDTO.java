package com.project.tim49.Dto;


import com.project.tim49.Model.MedicationDictionary;

public class MedicationDTO {

    private Long id;
    private String code;
    private String name;

    public MedicationDTO(){
    }

    public MedicationDTO(Long id, String code, String name) {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    public MedicationDTO(MedicationDictionary medication){
        this.id = medication.getId();
        this.code = medication.getCode();
        this.name = medication.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
