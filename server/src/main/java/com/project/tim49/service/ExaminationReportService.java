package com.project.tim49.service;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;
import com.project.tim49.dto.*;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ExaminationReportService {
    @Autowired
    ExaminationReportRepository reportRepository;
    @Autowired
    ClinicRepository clinicRepository;
    @Autowired
    PatientRepository patientRepository;
    @Autowired
    DoctorRepository doctorRepository;
    @Autowired
    TypeOfExaminationRepository typeOfExaminationRepository;
    @Autowired
    DiagnosisRepository diagnosisRepository;
    @Autowired
    MedicationRepository medicationsRepository;
    @Autowired
    PrescriptionRepository prescriptionRepository;
    @Autowired
    AppointmentRepository appointmentRepository;
    @Autowired
    DoctorPatientRepository doctorPatientRepository;
    @Autowired
    ClinicPatientRepository clinicPatientRepository;

    public void submitReport(ExaminationReportDTO examinationReportDTO,Long patientID,Long appoID){
        if (examinationReportDTO.getPerforms() == null){
            throw new ValidationException("Invalid doctor!");
        }
        Optional<Clinic> clinic = clinicRepository.findById(examinationReportDTO.getClinic().getId());
        if (!clinic.isPresent()){
            throw new ValidationException("No clinic with that ID!");
        }
        Optional<Patient> patient = patientRepository.findById(patientID);
        if (!patient.isPresent()){
            throw new ValidationException("No patient with that ID!");
        }
        Optional<Doctor> doctor = doctorRepository.findById(examinationReportDTO.getPerforms().getId());
        if (!doctor.isPresent()){
            throw new ValidationException("No doctor with that ID!");
        }
        ExaminationReport report = setReportData(examinationReportDTO,clinic.get(),patient.get(),doctor.get());
        ExaminationReport saved = reportRepository.save(report);
        Patient p = patient.get();
        p.getMedicalRecord().getExaminationReport().add(saved);

        Appointment toRemove = new Appointment();
        for(Appointment a:  p.getPendingAppointments()){
            if(a.getId().equals(appoID)){
                toRemove = a;
            }
        }
        toRemove = appointmentRepository.getOne(toRemove.getId());
        toRemove.setCompleted(true);
        Appointment savedAppo = appointmentRepository.save(toRemove);
        p.getFinishedAppointments().add(toRemove);
        p.getPendingAppointments().remove(toRemove);
        patientRepository.save(p);

        DoctorPatient docPat = doctorPatientRepository.getByDoctorAndPatient(doctor.get().getId(), p.getId());
        if (docPat == null){
            docPat = new DoctorPatient();
            docPat.setDoctor(doctor.get());
            docPat.setPatient(p);
            doctorPatientRepository.save(docPat);
        }
        ClinicPatient cliPat = clinicPatientRepository.getByClinicAndPatient(clinic.get().getId(), p.getId());
        if (cliPat == null){
            cliPat = new ClinicPatient();
            cliPat.setClinic(clinic.get());
            cliPat.setPatient(p);
            clinicPatientRepository.save(cliPat);
        }
    }
    public void submitBasicInfo(MedicalRecordDTO medicalRecordDTO,Long patientID){
        Optional<Patient> patient = patientRepository.findById(patientID);
        if (!patient.isPresent()){
            throw new ValidationException("No patient with that ID!");
        }
        Patient p = patient.get();
        MedicalRecord medicalRecord = p.getMedicalRecord();

        medicalRecord.setAlergies(medicalRecordDTO.getAlergies());
        medicalRecord.setBloodType(medicalRecordDTO.getBloodType());
        medicalRecord.setDiopter(medicalRecordDTO.getDiopter());
        medicalRecord.setHeight(medicalRecordDTO.getHeight());
        medicalRecord.setWeight(medicalRecordDTO.getWeight());
        p.setMedicalRecord(medicalRecord);
        patientRepository.save(p);
    }

    public void submitChangedReport(ExaminationReportDTO examinationReportDTO,Long patientID){
        Optional<Patient> patient = patientRepository.findById(patientID);
        if (!patient.isPresent()){
            throw new ValidationException("No patient with that ID!");
        }
        Patient p = patient.get();
        MedicalRecord medicalRecord = p.getMedicalRecord();
        List<ExaminationReport> er = medicalRecord.getExaminationReport();
        for (ExaminationReport e: er) {
            if(e.getDateAndTime() == examinationReportDTO.getDateAndTime()){
                e.setReportDescription(examinationReportDTO.getReportDescription());
                List<DiagnosisDictionary> diagnosisDictionaries = new ArrayList<>();
                for (DiagnosisDTO diagnosisDTO: examinationReportDTO.getDiagnosis()) {
                    DiagnosisDictionary dictionary = diagnosisRepository.findOneByCode(diagnosisDTO.getCode());
                    diagnosisDictionaries.add(dictionary);
                }
                e.setDiagnosis(diagnosisDictionaries);
            }
        }
        medicalRecord.setExaminationReport(er);
        p.setMedicalRecord(medicalRecord);
        patientRepository.save(p);
    }
    private ExaminationReport setReportData(ExaminationReportDTO examinationReportDTO,Clinic clinic, Patient patient,Doctor doctor){
        ExaminationReport report = new ExaminationReport();


        TypeOfExamination type = typeOfExaminationRepository.findById(examinationReportDTO.getTypeOfExamination().getId()).get();

        report.setClinic(clinic);
        report.setDateAndTime(examinationReportDTO.getDateAndTime());
        report.setMedicalRecord(patient.getMedicalRecord());
        report.setPerforms(doctor);
        report.setTypeOfExamination(type);
        report.setReportDescription(examinationReportDTO.getReportDescription());

        List<DiagnosisDTO> diagnosisDTOS = examinationReportDTO.getDiagnosis();
        List<DiagnosisDictionary> diagnosis = new ArrayList<>();
        for(DiagnosisDTO d: diagnosisDTOS) {
            DiagnosisDictionary dictionary = diagnosisRepository.findById(d.getId()).get();
            diagnosis.add(dictionary);
        }
        report.setDiagnosis(diagnosis);

        List<MedicationDTO> medicationDTOS = examinationReportDTO.getMedications();
        List<Prescription> prescriptions = new ArrayList<>();
        for(MedicationDTO m: medicationDTOS) {
            MedicationDictionary dictionary = medicationsRepository.findOneByCode(m.getCode());
            Prescription prescription = new Prescription();
            prescription.setApproved(false);
            prescription.setClinic(clinic);
            prescription.setMedication(dictionary);
            prescription.setApproves(null);
            prescription.setPerforms(doctor);
            prescriptions.add(prescription);
            prescriptionRepository.save(prescription);
        }
        report.setPrescription(prescriptions);
        return report;
    }
}
