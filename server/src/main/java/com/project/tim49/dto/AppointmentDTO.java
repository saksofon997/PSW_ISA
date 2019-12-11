package com.project.tim49.dto;

import com.project.tim49.model.Appointment;
import com.project.tim49.model.Doctor;

import java.util.ArrayList;
import java.util.List;

public class AppointmentDTO {

    private Long id;
    private long startingDateAndTime;
    private long endingDateAndTime;
    private long duration;
    private double price;
    private OrdinationDTO ordination;
    private ClinicDTO clinic;
    private PatientDTO patient;
    private TypeOfExaminationDTO typeOfExamination;
    private List<DoctorDTO> doctors;
    private boolean completed;

    public AppointmentDTO() {
    }

    public AppointmentDTO(Appointment appointment){
        this.id = appointment.getId();
        this.startingDateAndTime = appointment.getStartingDateAndTime();
        this.endingDateAndTime = appointment.getEndingDateAndTime();
        this.duration = appointment.getDuration();
        this.price = appointment.getPrice();
        this.ordination = new OrdinationDTO(appointment.getOrdination());
        this.clinic = new ClinicDTO(appointment.getClinic());
        this.typeOfExamination = new TypeOfExaminationDTO(appointment.getTypeOfExamination());
        this.doctors = new ArrayList<>();
        for (Doctor doctor: appointment.getDoctors()){
            this.doctors.add(new DoctorDTO(doctor));
        }
        this.completed = appointment.isCompleted();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getStartingDateAndTime() {
        return startingDateAndTime;
    }

    public void setStartingDateAndTime(long startingDateAndTime) {
        this.startingDateAndTime = startingDateAndTime;
    }

    public long getEndingDateAndTime() {
        return endingDateAndTime;
    }

    public void setEndingDateAndTime(long endingDateAndTime) {
        this.endingDateAndTime = endingDateAndTime;
    }

    public PatientDTO getPatient() {
        return patient;
    }

    public void setPatient(PatientDTO patient) {
        this.patient = patient;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public OrdinationDTO getOrdination() {
        return ordination;
    }

    public void setOrdination(OrdinationDTO ordination) {
        this.ordination = ordination;
    }

    public ClinicDTO getClinic() {
        return clinic;
    }

    public void setClinic(ClinicDTO clinic) {
        this.clinic = clinic;
    }

    public TypeOfExaminationDTO getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExaminationDTO typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }

    public boolean isCompleted() {
        return completed;
    }

    public List<DoctorDTO> getDoctors() {
        return doctors;
    }

    public void setDoctors(List<DoctorDTO> doctors) {
        this.doctors = doctors;
    }

//    public void setDoctorDTOs(DoctorDTO[] doctorDTOs) {
//        this.doctorDTOs = new ArrayList<>();
//        for (int i = 0; i < doctorDTOs.length; i++){
//            this.doctorDTOs.add(doctorDTOs[i]);
//        }
//
//    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

}
