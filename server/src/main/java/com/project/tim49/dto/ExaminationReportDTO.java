package com.project.tim49.dto;



import com.project.tim49.model.DiagnosisDictionary;
import com.project.tim49.model.ExaminationReport;
import com.project.tim49.model.Prescription;

import java.util.ArrayList;
import java.util.List;

public class ExaminationReportDTO {

    private String reportDescription;
    private long dateAndTime;
    private DoctorDTO performs;
    private ClinicDTO clinic;
    public List<DiagnosisDTO> diagnosis;
    public List<PrescriptionDTO> prescription;
    public List<MedicationDTO> medications;
    public TypeOfExaminationDTO typeOfExamination;

    public ExaminationReportDTO(ExaminationReport er) {
        this.reportDescription = er.getReportDescription();
        this.dateAndTime = er.getDateAndTime();
        this.performs = new DoctorDTO(er.getPerforms());
        this.clinic = new ClinicDTO(er.getClinic());
        this.diagnosis = new ArrayList<DiagnosisDTO>();
        this.prescription = new ArrayList<PrescriptionDTO>();
        for (DiagnosisDictionary diagnosis: er.getDiagnosis()) {
            this.diagnosis.add(new DiagnosisDTO(diagnosis));
        }
        for (Prescription prescription: er.getPrescription()) {
            this.prescription.add(new PrescriptionDTO(prescription));
        }
        this.typeOfExamination = new TypeOfExaminationDTO(er.getTypeOfExamination());
    }

    public ExaminationReportDTO() {
        super();
    }

    public ExaminationReportDTO(String reportDescription, long dateAndTime, DoctorDTO performs, ClinicDTO clinic, List<DiagnosisDTO> diagnosis, List<PrescriptionDTO> prescription, List<MedicationDTO> medications, TypeOfExaminationDTO typeOfExamination) {
        this.reportDescription = reportDescription;
        this.dateAndTime = dateAndTime;
        this.performs = performs;
        this.clinic = clinic;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
        this.medications = medications;
        this.typeOfExamination = typeOfExamination;
    }

    public List<MedicationDTO> getMedications() {
        return medications;
    }

    public void setMedications(List<MedicationDTO> medications) {
        this.medications = medications;
    }

    public String getReportDescription() {
        return reportDescription;
    }

    public void setReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
    }

    public long getDateAndTime() {
        return dateAndTime;
    }

    public void setDateAndTime(long dateAndTime) {
        this.dateAndTime = dateAndTime;
    }

    public DoctorDTO getPerforms() {
        return performs;
    }

    public void setPerforms(DoctorDTO performs) {
        this.performs = performs;
    }

    public ClinicDTO getClinic() {
        return clinic;
    }

    public void setClinic(ClinicDTO clinic) {
        this.clinic = clinic;
    }

    public List<DiagnosisDTO> getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(List<DiagnosisDTO> diagnosis) {
        this.diagnosis = diagnosis;
    }

    public List<PrescriptionDTO> getPrescription() {
        return prescription;
    }

    public void setPrescription(List<PrescriptionDTO> prescription) {
        this.prescription = prescription;
    }

    public TypeOfExaminationDTO getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExaminationDTO typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }
}
