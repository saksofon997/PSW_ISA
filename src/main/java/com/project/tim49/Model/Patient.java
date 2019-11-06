package com.project.tim49.Model; /***********************************************************************
 * Module:  Patient.java
 * Author:  TIM 49
 * Purpose: Defines the Class Patient
 ***********************************************************************/

/** @pdOid 436ca8d4-e370-4eda-b5ea-ff5f0534f3b9 */
public class Patient extends User {

   /** @pdRoleInfo migr=no name=MedicalRecord assc=association10 mult=1..1 */
   public MedicalRecord medicalRecord;

   public MedicalRecord getMedicalRecord() {
      return medicalRecord;
   }

   public void setMedicalRecord(MedicalRecord medicalRecord) {
      this.medicalRecord = medicalRecord;
   }
}