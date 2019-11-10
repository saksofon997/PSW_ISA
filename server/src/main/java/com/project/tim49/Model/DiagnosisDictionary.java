package com.project.tim49.Model; /***********************************************************************
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

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public String getCode() {
      return code;
   }

   public void setCode(String code) {
      this.code = code;
   }
}