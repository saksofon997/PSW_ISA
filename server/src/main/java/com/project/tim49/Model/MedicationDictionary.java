package com.project.tim49.Model; /***********************************************************************
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
}
