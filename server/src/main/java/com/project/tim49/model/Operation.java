package com.project.tim49.model; /***********************************************************************
 * Module:  Operation.java
 * Author:  TIM 49
 * Purpose: Defines the Class Operation
 ***********************************************************************/

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue("OP")
public class Operation extends Appointment {

   @ManyToMany
   @JoinTable(name = "operation_doctors", joinColumns = @JoinColumn(name = "operation_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id"))
   public List<Doctor> doctors;

   public List<Doctor> getDoctors() {
      return doctors;
   }

   public void setDoctors(List<Doctor> doctors) {
      this.doctors = doctors;
   }
}