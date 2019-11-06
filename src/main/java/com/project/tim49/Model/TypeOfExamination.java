package com.project.tim49.Model; /***********************************************************************
 * Module:  TypeOfExamination.java
 * Author:  TIM 49
 * Purpose: Defines the Class TypeOfExamination
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/** @pdOid c5e62d0c-c40b-4891-86d5-8d9fcc4c6fee */
public class TypeOfExamination {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   /** @pdOid 68999b6c-e980-4cdd-8b6c-9c17ccc883bb */
   private String name;

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }
}