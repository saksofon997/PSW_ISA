package com.project.tim49.Model; /***********************************************************************
 * Module:  MedicalRecord.java
 * Author:  TIM 49
 * Purpose: Defines the Class MedicalRecord
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Collection;

public class MedicalRecord {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   /** @pdRoleInfo migr=no name=ExaminationReport assc=association22 coll=java.util.Collection impl=java.util.HashSet mult=0..* */
   public Collection<ExaminationReport> examinationReport;
   private String bloodType;
   private String diopter;
   private String alergies;
   private String height;
   private String weight;
/** TO BE FILLED UP IF NECESSARY **/
   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public Collection<ExaminationReport> getExaminationReport() {
      return examinationReport;
   }

   public void setExaminationReport(Collection<ExaminationReport> examinationReport) {
      this.examinationReport = examinationReport;
   }

   public String getBloodType() {
      return bloodType;
   }

   public void setBloodType(String bloodType) {
      this.bloodType = bloodType;
   }

   public String getDiopter() {
      return diopter;
   }

   public void setDiopter(String diopter) {
      this.diopter = diopter;
   }

   public String getAlergies() {
      return alergies;
   }

   public void setAlergies(String alergies) {
      this.alergies = alergies;
   }

   public String getHeight() {
      return height;
   }

   public void setHeight(String height) {
      this.height = height;
   }

   public String getWeight() {
      return weight;
   }

   public void setWeight(String weight) {
      this.weight = weight;
   }
}