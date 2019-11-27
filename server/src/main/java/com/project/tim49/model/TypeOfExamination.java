package com.project.tim49.model; /***********************************************************************
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

   @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
   private Clinic clinic_id;

   @Column(name = "price")
   private float price;


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

   public Clinic getClinic_id() {
      return clinic_id;
   }

   public void setClinic_id(Clinic clinic_id) {
      this.clinic_id = clinic_id;
   }

   public float getPrice() {
      return price;
   }

   public void setPrice(float price) {
      this.price = price;
   }
}
