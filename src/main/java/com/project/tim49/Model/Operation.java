package com.project.tim49.Model; /***********************************************************************
 * Module:  Operation.java
 * Author:  TIM 49
 * Purpose: Defines the Class Operation
 ***********************************************************************/

import java.util.Collection;

/** @pdOid 2a77022b-54ad-4bd4-b6ad-40cf64fa9443 */
public class Operation extends Appointment {
   /** @pdRoleInfo migr=no name=Doctor assc=association13 coll=java.util.Collection impl=java.util.HashSet mult=1..* */
   public Collection<Doctor> doctor;

   public Collection<Doctor> getDoctor() {
      return doctor;
   }

   public void setDoctor(Collection<Doctor> doctor) {
      this.doctor = doctor;
   }
}