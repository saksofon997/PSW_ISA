package com.project.tim49.Model; /***********************************************************************
 * Module:  Clinic.java
 * Author:  TIM 49
 * Purpose: Defines the Class Clinic
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Entity
public class Clinic {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String name;
   private String address;
   private String city;
   private String state;
   private String description;
   //private Collection<Pricelist> pricelist;
   private int numberOfStars;
   private int numberOfReviews;
//
//   /** @pdRoleInfo migr=no name=Ordination assc=association2 coll=java.util.Collection impl=java.util.ArrayList mult=0..* type=Composition */
//   public Collection<Ordination> ordination;
//   /** @pdRoleInfo migr=no name=ClinicAdministrator assc=association6 coll=java.util.Collection impl=java.util.ArrayList mult=1..* */
//   public Collection<ClinicAdministrator> clinicAdministrator;
//   /** @pdRoleInfo migr=no name=Patient assc=association7 coll=java.util.Collection impl=java.util.ArrayList mult=0..* */
//   public Collection<Patient> patient;
//   /** @pdRoleInfo migr=no name=MedicalStaff assc=association8 coll=java.util.Collection impl=java.util.HashSet mult=0..* */
//   public Collection<Doctor> doctor;
//   public Collection<Nurse> nurse;
//   /** !!!!!! availableAppointments !!!!!! */
//   /** @pdRoleInfo migr=no name=Appointment assc=association11 coll=java.util.Collection impl=java.util.ArrayList mult=0..* */
//   public Collection<Appointment> appointment;
//   /** @pdRoleInfo migr=no name=TypeOfExamination assc=association15 coll=java.util.Collection impl=java.util.HashSet mult=0..* */
//   public Collection<TypeOfExamination> typeOfExamination;
//
//   public String getName() {
//      return name;
//   }
//
//   public void setName(String name) {
//      this.name = name;
//   }
//
//   public String getAddress() {
//      return address;
//   }
//
//   public void setAddress(String address) {
//      this.address = address;
//   }
//
//   public String getCity() {
//      return city;
//   }
//
//   public void setCity(String city) {
//      this.city = city;
//   }
//
//   public String getState() {
//      return state;
//   }
//
//   public void setState(String state) {
//      this.state = state;
//   }
//
//   public String getDescription() {
//      return description;
//   }
//
//   public void setDescription(String description) {
//      this.description = description;
//   }
//
//   public Long getId() {
//      return id;
//   }
//
//   public void setId(Long id) {
//      this.id = id;
//   }
//
//   public Collection<Pricelist> getPricelist() {
//      return pricelist;
//   }
//
//   public void setPricelist(Collection<Pricelist> pricelist) {
//      this.pricelist = pricelist;
//   }
//
//   public int getNumberOfStars() {
//      return numberOfStars;
//   }
//
//   public void setNumberOfStars(int numberOfStars) {
//      this.numberOfStars = numberOfStars;
//   }
//
//   public int getNumberOfReviews() {
//      return numberOfReviews;
//   }
//
//   public void setNumberOfReviews(int numberOfReviews) {
//      this.numberOfReviews = numberOfReviews;
//   }
//
//   public Collection<Ordination> getOrdination() {
//      return ordination;
//   }
//
//   public void setOrdination(Collection<Ordination> ordination) {
//      this.ordination = ordination;
//   }
//
//   public Collection<ClinicAdministrator> getClinicAdministrator() {
//      return clinicAdministrator;
//   }
//
//   public void setClinicAdministrator(Collection<ClinicAdministrator> clinicAdministrator) {
//      this.clinicAdministrator = clinicAdministrator;
//   }
//
//   public Collection<Patient> getPatient() {
//      return patient;
//   }
//
//   public void setPatient(Collection<Patient> patient) {
//      this.patient = patient;
//   }
//
//   public Collection<Doctor> getDoctor() {
//      return doctor;
//   }
//
//   public void setDoctor(Collection<Doctor> doctor) {
//      this.doctor = doctor;
//   }
//
//   public Collection<Nurse> getNurse() {
//      return nurse;
//   }
//
//   public void setNurse(Collection<Nurse> nurse) {
//      this.nurse = nurse;
//   }
//
//   public Collection<Appointment> getAppointment() {
//      return appointment;
//   }
//
//   public void setAppointment(Collection<Appointment> appointment) {
//      this.appointment = appointment;
//   }
//
//   public Collection<TypeOfExamination> getTypeOfExamination() {
//      return typeOfExamination;
//   }
//
//   public void setTypeOfExamination(Collection<TypeOfExamination> typeOfExamination) {
//      this.typeOfExamination = typeOfExamination;
//   }
}