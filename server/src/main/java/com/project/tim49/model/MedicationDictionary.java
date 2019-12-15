package com.project.tim49.model; /***********************************************************************
 * Module:  MedicationDictionary.java
 * Author:  TIM 49
 * Purpose: Defines the Class MedicationDictionary
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class MedicationDictionary {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column(name = "code", nullable = false)
   private String code;

   @Column(name = "name", nullable = false)
   private String name;

   @Column(name = "deleted", nullable = false)
   private boolean deleted = false;

   public Long getId() {
      return id;
   }

   public String getCode() {
      return code;
   }

   public void setCode(String code) {
      this.code = code;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public boolean isDeleted() {
      return deleted;
   }

   public void setDeleted(boolean deleted) {
      this.deleted = deleted;
   }
}
