package com.project.tim49.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

/***********************************************************************
 * Module:  Patient.java
 * Author:  TIM 49
 * Purpose: Defines the Class Patient
 ***********************************************************************/

@Entity
public class Patient extends User {

   @OneToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "medicalRecord_id", referencedColumnName = "id")
   public MedicalRecord medicalRecord;

   @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, targetEntity = Appointment.class)
   @JoinTable(name = "patients_finished_appointments", joinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "appointment_id", referencedColumnName = "id"))
   public Set<Appointment> finishedAppointments;

   @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, targetEntity = Appointment.class)
   @JoinTable(name = "patients_pending_appointments", joinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "appointment_id", referencedColumnName = "id"))
   public Set<Appointment> pendingAppointments;

   public MedicalRecord getMedicalRecord() {
      return medicalRecord;
   }

   public void setMedicalRecord(MedicalRecord medicalRecord) {
      this.medicalRecord = medicalRecord;
   }

   public Set<Appointment> getFinishedAppointments() {
      return finishedAppointments;
   }

   public void setFinishedAppointments(Set<Appointment> finishedAppointments) {
      this.finishedAppointments = finishedAppointments;
   }

   public Set<Appointment> getPendingAppointments() {
      return pendingAppointments;
   }

   public void setPendingAppointments(Set<Appointment> pendingAppointments) {
      this.pendingAppointments = pendingAppointments;
   }
}
