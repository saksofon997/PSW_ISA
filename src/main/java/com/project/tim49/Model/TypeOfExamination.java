package com.project.tim49.Model; /***********************************************************************
 * Module:  TypeOfExamination.java
 * Author:  TIM 49
 * Purpose: Defines the Class TypeOfExamination
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class TypeOfExamination {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column(name = "name", nullable = false)
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