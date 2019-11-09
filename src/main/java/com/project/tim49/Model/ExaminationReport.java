package com.project.tim49.Model; /***********************************************************************
 * Module:  ExaminationReport.java
 * Author:  TIM 49
 * Purpose: Defines the Class ExaminationReport
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Collection;

/** @pdOid 32e6f23f-547f-4d0a-aadd-55fe4e22d375 */
public class ExaminationReport {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   /** @pdOid 622ea920-6b05-4e68-adb4-e5e9aa3bdfb3 */
   private Doctor performs;
   /** @pdOid 39196a72-21d9-4de6-a546-302aeaebc5fa */

   private String reportDescription;

   private Clinic clinic;

   private long dateAndTime;

   /** @pdRoleInfo migr=no name=DiagnosisDictionary assc=association21 coll=java.util.Collection impl=java.util.HashSet mult=0..* */
   public Collection<DiagnosisDictionary> diagnosis;
   public Collection<Prescription> prescription;

   public long getDateAndTime() {
      return dateAndTime;
   }

   public void setDateAndTime(long dateAndTime) {
      this.dateAndTime = dateAndTime;
   }

   public Collection<Prescription> getPrescription() {
      return prescription;
   }

   public void setPrescription(Collection<Prescription> prescription) {
      this.prescription = prescription;
   }

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public Doctor getPerforms() {
      return performs;
   }

   public void setPerforms(Doctor performs) {
      this.performs = performs;
   }

   public Collection<DiagnosisDictionary> getDiagnosis() {
      return diagnosis;
   }

   public void setDiagnosis(Collection<DiagnosisDictionary> diagnosis) {
      this.diagnosis = diagnosis;
   }
   public String getReportDescription() {
      return reportDescription;
   }

   public void setReportDescription(String reportDescription) {
      this.reportDescription = reportDescription;
   }

   public Clinic getClinic() {
      return clinic;
   }

   public void setClinic(Clinic clinic) {
      this.clinic = clinic;
   }

}