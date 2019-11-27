package com.project.tim49.model;

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


   public Doctor getDoctor() {
      return doctor;
   }

   public void setDoctor(Doctor doctor) {
      this.doctor = doctor;
   }

}
