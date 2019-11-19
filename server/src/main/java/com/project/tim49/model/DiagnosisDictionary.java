package com.project.tim49.model; /***********************************************************************
 * Module:  DiagnosisDictionary.java
 * Author:  TIM 49
 * Purpose: Defines the Class DiagnosisDictionary
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class DiagnosisDictionary {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column(name = "code", nullable = false)
   private String code;

   @Column(name = "description")
   private String description;

   public Long getId() {
      return id;
   }

   public String getCode() {
      return code;
   }

   public void setCode(String code) {
      this.code = code;
   }

   public String getDescription() {
      return description;
   }

   public void setDescription(String description) {
      this.description = description;
   }
}
