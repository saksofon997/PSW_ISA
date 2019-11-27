package com.project.tim49.dto;

import com.project.tim49.model.DiagnosisDictionary;

public class DiagnosisDTO {

    private Long id;
    private String code;
    private String description;

    public DiagnosisDTO() {

    }

    public DiagnosisDTO(DiagnosisDictionary d) {
        this.id = d.getId();
        this.code = d.getCode();
        this.description = d.getDescription();
    }

    public DiagnosisDTO(Long id, String code, String description) {
        this.id = id;
        this.code = code;
        this.description = description;
    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
