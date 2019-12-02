package com.project.tim49.model;

import javax.persistence.*;
import java.util.List;

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

   @ManyToMany
   @JoinTable(name = "patients_finished_appointments", joinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "appointment_id", referencedColumnName = "id"))
   public List<Appointment> finishedAppointments;

   @ManyToMany
   @JoinTable(name = "patients_pending_appointments", joinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "appointment_id", referencedColumnName = "id"))
   public List<Appointment> pendingAppointments;

   public MedicalRecord getMedicalRecord() {
      return medicalRecord;
   }

   public void setMedicalRecord(MedicalRecord medicalRecord) {
      this.medicalRecord = medicalRecord;
   }

   public List<Appointment> getFinishedAppointments() {
      return finishedAppointments;
   }

   public void setFinishedAppointments(List<Appointment> finishedAppointments) {
      this.finishedAppointments = finishedAppointments;
   }

   public List<Appointment> getPendingAppointments() {
      return pendingAppointments;
   }

   public void setPendingAppointments(List<Appointment> pendingAppointments) {
      this.pendingAppointments = pendingAppointments;
   }
}
