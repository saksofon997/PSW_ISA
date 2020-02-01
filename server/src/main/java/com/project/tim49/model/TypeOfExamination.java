package com.project.tim49.model; /***********************************************************************
 * Module:  TypeOfExamination.java
 * Author:  TIM 49
 * Purpose: Defines the Class TypeOfExamination
 ***********************************************************************/

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class TypeOfExamination {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column(name = "name", nullable = false)
   private String name;

   @Column(name = "operation")
   private boolean operation;

   @OneToMany(mappedBy = "typeOfExamination", cascade = CascadeType.ALL)
   private Set<ClinicTypeOfExamination> clinics = new HashSet<>();

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

   public boolean isOperation() {
      return operation;
   }

   public void setOperation(boolean operation) {
      this.operation = operation;
   }

   public Set<ClinicTypeOfExamination> getClinics() {
      return clinics;
   }

   public void setClinics(Set<ClinicTypeOfExamination> clinics) {
      this.clinics = clinics;
   }
}
