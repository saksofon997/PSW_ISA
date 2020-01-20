package com.project.tim49.dto;

import com.project.tim49.model.ExaminationReport;
import com.project.tim49.model.MedicalRecord;
import com.project.tim49.model.Prescription;

import java.util.ArrayList;
import java.util.List;

public class MedicalRecordDTO {
    private List<ExaminationReportDTO> examinationReport;
    private String bloodType;
    private String diopter;
    private String alergies;
    private String height;
    private String weight;
    private String sex;

    public MedicalRecordDTO() {
    }

    public MedicalRecordDTO(List<ExaminationReportDTO> examinationReport, String bloodType, String diopter, String alergies, String height, String weight, String sex) {
        this.examinationReport = examinationReport;
        this.bloodType = bloodType;
        this.diopter = diopter;
        this.alergies = alergies;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }

    public MedicalRecordDTO(MedicalRecord mr) {
        this.examinationReport = new ArrayList<ExaminationReportDTO>();
        this.bloodType = mr.getBloodType();
        this.diopter = mr.getDiopter();
        this.alergies = mr.getAlergies();
        this.height = mr.getHeight();
        this.weight = mr.getWeight();
        this.sex = mr.getSex();
        for (ExaminationReport er: mr.getExaminationReport()) {
            this.examinationReport.add(new ExaminationReportDTO(er));
        }
    }

    public List<ExaminationReportDTO> getExaminationReport() {
        return examinationReport;
    }

    public void setExaminationReport(List<ExaminationReportDTO> examinationReport) {
        this.examinationReport = examinationReport;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getDiopter() {
        return diopter;
    }

    public void setDiopter(String diopter) {
        this.diopter = diopter;
    }

    public String getAlergies() {
        return alergies;
    }

    public void setAlergies(String alergies) {
        this.alergies = alergies;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }
}
