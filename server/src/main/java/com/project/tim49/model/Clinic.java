package com.project.tim49.model; /***********************************************************************
 * Module:  Clinic.java
 * Author:  TIM 49
 * Purpose: Defines the Class Clinic
 ***********************************************************************/

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

   @OnDelete(action = OnDeleteAction.CASCADE)
   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Ordination> ordination;

   @OnDelete(action = OnDeleteAction.CASCADE)
   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<ClinicAdministrator> clinicAdministrator;

   @OneToMany(mappedBy = "clinic", cascade = CascadeType.ALL)
   private Set<ClinicTypeOfExamination> typesOfExaminations = new HashSet<>();

//   @ManyToMany(cascade = CascadeType.DETACH)
//   @JoinTable(name = "clinics_patients", joinColumns = @JoinColumn(name = "clinic_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"))
//   public List<Patient> patients;
   @OneToMany(mappedBy = "clinic", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
   private Set<ClinicPatient> patients = new HashSet<>();

   @OnDelete(action = OnDeleteAction.CASCADE)
   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Doctor> doctors;

   @OnDelete(action = OnDeleteAction.CASCADE)
   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Nurse> nurses;

   @OnDelete(action = OnDeleteAction.CASCADE)
   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Appointment> appointments;

   @OnDelete(action = OnDeleteAction.CASCADE)
   @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY)
   public List<Prescription> prescriptions;

   public List<Prescription> getPrescriptions() {
      return prescriptions;
   }

   public void setPrescriptions(List<Prescription> prescriptions) {
      this.prescriptions = prescriptions;
   }

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

   public Set<ClinicTypeOfExamination> getTypesOfExaminations() {
      return typesOfExaminations;
   }

   public void setTypesOfExaminations(Set<ClinicTypeOfExamination> typesOfExaminations) {
      this.typesOfExaminations = typesOfExaminations;
   }

   public Set<ClinicPatient> getPatients() {
      return patients;
   }

   public void setPatients(Set<ClinicPatient> patients) {
      this.patients = patients;
   }

   public List<Doctor> getDoctors() {
      return doctors;
   }

   public void setDoctors(List<Doctor> doctors) {
      this.doctors = doctors;
   }

   public List<Nurse> getNurses() {
      return nurses;
   }

   public void setNurses(List<Nurse> nurses) {
      this.nurses = nurses;
   }

   public List<Appointment> getAppointments() {
      return appointments;
   }

   public void setAppointments(List<Appointment> appointments) {
      this.appointments = appointments;
   }


}
