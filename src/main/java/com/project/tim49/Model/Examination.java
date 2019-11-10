package com.project.tim49.Model;

import javax.persistence.*;

/***********************************************************************
 * Module:  Examination.java
 * Author:  TIM 49
 * Purpose: Defines the Class Examination
 ***********************************************************************/

@Entity
@DiscriminatorValue("EX")
public class Examination extends Appointment {

   @OneToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "doctor_id", referencedColumnName = "id")
   public Doctor doctor;

   @OneToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "typeOfExamination_id", referencedColumnName = "id")
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