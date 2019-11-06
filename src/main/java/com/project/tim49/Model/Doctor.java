package com.project.tim49.Model; /***********************************************************************
 * Module:  Doctor.java
 * Author:  TIM 49
 * Purpose: Defines the Class Doctor
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Collection;

/** @pdOid 5f5e1a4a-5758-49fd-b75e-b6c8683b4f9d */
public class Doctor extends User {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   /** @pdOid 8049250d-f41c-441d-b8f8-ff4d71acc29f */
   private String shiftStart;
   /** @pdOid 80368039-ebd0-4125-ab78-e15bf4157463 */
   private String shiftEnd;
       /*  NADAMO SE DA MOZE DA SE POVEZE KROZ SPRING JPA -update: moze*/
   public Clinic clinic;
   /** @pdRoleInfo migr=no name=Appointment assc=association14 coll=java.util.Collection impl=java.util.HashSet mult=0..* */
   public Collection<Appointment> appointments;
   /** @pdOid 00bb8b9d-3196-4bc8-866a-37f505e4840f */
   private int numberOfStars;
   /** @pdOid 48edbe96-7b57-453f-86c6-e7baa808c09f */
   private int numberOfReviews;

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public Collection<Appointment> getAppointment() {
      return appointments;
   }

   public void setAppointment(Collection<Appointment> appointment) {
      this.appointments = appointment;
   }

   public int getNumberOfStars() {
      return numberOfStars;
   }

   public void setNumberOfStars(int numberOfStars) {
      this.numberOfStars = numberOfStars;
   }

   public int getNumberOfReviews() {
      return numberOfReviews;
   }

   public void setNumberOfReviews(int numberOfReviews) {
      this.numberOfReviews = numberOfReviews;
   }
}