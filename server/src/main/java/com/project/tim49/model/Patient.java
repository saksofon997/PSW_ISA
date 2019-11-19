package com.project.tim49.model;

import javax.persistence.*;

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

   public MedicalRecord getMedicalRecord() {
      return medicalRecord;
   }

   public void setMedicalRecord(MedicalRecord medicalRecord) {
      this.medicalRecord = medicalRecord;
   }
}
