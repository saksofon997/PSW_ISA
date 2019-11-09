package com.project.tim49.Model;

/***********************************************************************
 * Module:  Patient.java
 * Author:  TIM 49
 * Purpose: Defines the Class Patient
 ***********************************************************************/

//@Entity
//@Inheritance(strategy= InheritanceType.TABLE_PER_CLASS)
public class Patient extends User {

   /** @pdRoleInfo migr=no name=MedicalRecord assc=association10 mult=1..1 */
   public String medicalRecord;

   public String getMedicalRecord() {
      return medicalRecord;
   }

   public void setMedicalRecord(String medicalRecord) {
      this.medicalRecord = medicalRecord;
   }
}