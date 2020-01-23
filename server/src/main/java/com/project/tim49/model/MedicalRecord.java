package com.project.tim49.model; /***********************************************************************
 * Module:  MedicalRecord.java
 * Author:  TIM 49
 * Purpose: Defines the Class MedicalRecord
 ***********************************************************************/

import javax.persistence.*;
import java.util.List;

@Entity
public class MedicalRecord {
   @Id
   //@SequenceGenerator(name="medical_record_id_seq",sequenceName="medical_record_id_seq", allocationSize=1)
   //@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="medical_record_id_seq")
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @OneToMany(mappedBy = "medicalRecord", fetch = FetchType.LAZY)
   public List<ExaminationReport> examinationReport;

   @Column(name = "bloodType", nullable = false)
   private String bloodType;

   @Column(name = "diopter", nullable = false)
   private String diopter;

   @Column(name = "alergies", nullable = false)
   private String alergies;

   @Column(name = "height", nullable = false)
   private String height;

   @Column(name = "weight", nullable = false)
   private String weight;

   @Column(name = "sex", nullable = false)
   private String sex;
/** TO BE FILLED UP IF NECESSARY **/
   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public List<ExaminationReport> getExaminationReport() {
      return examinationReport;
   }

   public void setExaminationReport(List<ExaminationReport> examinationReport) {
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

   public String getSex() {
      return sex;
   }

   public void setSex(String sex) {
      this.sex = sex;
   }
}
