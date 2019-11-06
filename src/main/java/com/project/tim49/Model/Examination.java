package com.project.tim49.Model; /***********************************************************************
 * Module:  Examination.java
 * Author:  TIM 49
 * Purpose: Defines the Class Examination
 ***********************************************************************/

/** @pdOid 1440f74b-fc67-4a46-8bff-b34f2236d970 */
public class Examination extends Appointment {
   /** @pdRoleInfo migr=no name=Doctor assc=association12 mult=1..1 */
   public Doctor doctor;
   public TypeOfExamination typeOfExamination;

   public Doctor getDoctor() {
      return doctor;
   }

   public void setDoctor(Doctor doctor) {
      this.doctor = doctor;
   }

   public TypeOfExamination getTypeOfExamination() {
      return typeOfExamination;
   }

   public void setTypeOfExamination(TypeOfExamination typeOfExamination) {
      this.typeOfExamination = typeOfExamination;
   }
}