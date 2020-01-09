package com.project.tim49.model; /***********************************************************************
 * Module:  ExaminationReport.java
 * Author:  TIM 49
 * Purpose: Defines the Class ExaminationReport
 ***********************************************************************/

import javax.persistence.*;
import java.util.List;

@Entity
public class ExaminationReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reportDescription", nullable = false)
    private String reportDescription;

    @Column(name = "dateAndTime", nullable = false)
    private long dateAndTime;

   @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private MedicalRecord medicalRecord;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    private Doctor performs;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "clinic_id")
    private Clinic clinic;

    @ManyToMany
    @JoinTable(name = "examinationReports_diagnosis", joinColumns = @JoinColumn(name = "examinationReports_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "diagnosis_id", referencedColumnName = "id"))
    public List<DiagnosisDictionary> diagnosis;

    @ManyToMany
    @JoinTable(name = "examinationReports_prescriptions", joinColumns = @JoinColumn(name = "examinationReports_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "prescription_id", referencedColumnName = "id"))
    public List<Prescription> prescription;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn(name = "type_of_examination_id", referencedColumnName = "id")
    public TypeOfExamination typeOfExamination;

    public MedicalRecord getMedicalRecord() {
        return medicalRecord;
    }

    public void setMedicalRecord(MedicalRecord medicalRecord) {
        this.medicalRecord = medicalRecord;
    }

    public TypeOfExamination getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExamination typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }

    public long getDateAndTime() {
        return dateAndTime;
    }

    public void setDateAndTime(long dateAndTime) {
        this.dateAndTime = dateAndTime;
    }

    public List<Prescription> getPrescription() {
        return prescription;
    }

    public void setPrescription(List<Prescription> prescription) {
        this.prescription = prescription;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Doctor getPerforms() {
        return performs;
    }

    public void setPerforms(Doctor performs) {
        this.performs = performs;
    }

    public List<DiagnosisDictionary> getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(List<DiagnosisDictionary> diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getReportDescription() {
        return reportDescription;
    }

    public void setReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

}
