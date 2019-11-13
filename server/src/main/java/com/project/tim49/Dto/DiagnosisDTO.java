package com.project.tim49.Dto;

import com.project.tim49.Model.DiagnosisDictionary;

public class DiagnosisDTO {

    private String code;
    private String description;

    public DiagnosisDTO() {

    }

    public DiagnosisDTO(DiagnosisDictionary d) {
        this.code = d.getCode();
        this.description = d.getDescription();
    }

    public DiagnosisDTO(String code, String description) {
        this.code = code;
        this.description = description;
    }

    public DiagnosisDTO(String code) {
        this.code = code;
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
}
