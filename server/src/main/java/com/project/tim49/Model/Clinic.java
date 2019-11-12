package com.project.tim49.Model; /***********************************************************************
 * Module:  Clinic.java
 * Author:  TIM 49
 * Purpose: Defines the Class Clinic
 ***********************************************************************/

import javax.persistence.*;
import java.util.List;

@Entity
public class Clinic {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column(name = "name", nullable = false)
   private String name;

   @Column(name = "address", nullable = false)
   private String address;

   @Column(name = "city", nullable = false)
   private String city;

   @Column(name = "state", nullable = false)
   private String state;

   @Column(name = "description", nullable = false)
   private String description;

   @Column(name = "numberOfStars", nullable = true)
   private int numberOfStars;

   @Column(name = "numberOfReviews", nullable = true)
   private int numberOfReviews;

   @OneToMany(mappedBy = "clinic")
   private List<Pricelist> pricelist;

   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Ordination> ordination;

   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<ClinicAdministrator> clinicAdministrator;

   @ManyToMany
   @JoinTable(name = "clinics_patients", joinColumns = @JoinColumn(name = "clinic_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"))
   public List<Patient> patient;

   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Doctor> doctor;

   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Nurse> nurse;

   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Appointment> appointment;

   @ManyToMany
   @JoinTable(name = "clinics_typesOfExamination", joinColumns = @JoinColumn(name = "clinic_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "typeOfExamination_id", referencedColumnName = "id"))
   public List<TypeOfExamination> typeOfExamination;

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getAddress() {
      return address;
   }

   public void setAddress(String address) {
      this.address = address;
   }

   public String getCity() {
      return city;
   }

   public void setCity(String city) {
      this.city = city;
   }

   public String getState() {
      return state;
   }

   public void setState(String state) {
      this.state = state;
   }

   public String getDescription() {
      return description;
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

   public List<Pricelist> getPricelist() {
      return pricelist;
   }

   public void setPricelist(List<Pricelist> pricelist) {
      this.pricelist = pricelist;
   }

   public int getNumberOfStars() {
      return numberOfStars;
   }

   public void setNumberOfStars(int numberOfStars) {
      this.numberOfStars = numberOfStars;
   }

   public int getNumberOfReviews() {
      return numberOfReviews;
   }

   public void setNumberOfReviews(int numberOfReviews) {
      this.numberOfReviews = numberOfReviews;
   }

   public List<Ordination> getOrdination() {
      return ordination;
   }

   public void setOrdination(List<Ordination> ordination) {
      this.ordination = ordination;
   }

   public List<ClinicAdministrator> getClinicAdministrator() {
      return clinicAdministrator;
   }

   public void setClinicAdministrator(List<ClinicAdministrator> clinicAdministrator) {
      this.clinicAdministrator = clinicAdministrator;
   }

   public List<Patient> getPatient() {
      return patient;
   }

   public void setPatient(List<Patient> patient) {
      this.patient = patient;
   }

   public List<Doctor> getDoctor() {
      return doctor;
   }

   public void setDoctor(List<Doctor> doctor) {
      this.doctor = doctor;
   }

   public List<Nurse> getNurse() {
      return nurse;
   }

   public void setNurse(List<Nurse> nurse) {
      this.nurse = nurse;
   }

   public List<Appointment> getAppointment() {
      return appointment;
   }

   public void setAppointment(List<Appointment> appointment) {
      this.appointment = appointment;
   }

   public List<TypeOfExamination> getTypeOfExamination() {
      return typeOfExamination;
   }

   public void setTypeOfExamination(List<TypeOfExamination> typeOfExamination) {
      this.typeOfExamination = typeOfExamination;
   }
}