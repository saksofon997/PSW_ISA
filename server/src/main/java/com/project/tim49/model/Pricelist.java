package com.project.tim49.model; /***********************************************************************
 * Module:  Pricelist.java
 * Author:  TIM 49
 * Purpose: Defines the Class Pricelist
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class Pricelist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "price", nullable = false)
    private float price;

    @ManyToOne
    @JoinColumn(name = "typeOfExamination", referencedColumnName = "id")
    private TypeOfExamination typeOfExamination;

    @ManyToOne
    @JoinColumn(name = "clinic", referencedColumnName = "id")
    private Clinic clinic;

   /**
    *  https://stackoverflow.com/questions/23837561/jpa-2-0-many-to-many-with-extra-column?fbclid=IwAR1Eo96O9VIpgUuuq19iR9aW5uk0qHlqa0lTOkZ6vzhWVFXbmDnxKdmVcQ8
    **/
   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public float getPrice() {
      return price;
   }

   public void setPrice(float price) {
      this.price = price;
   }

   public TypeOfExamination getTypeOfExamination() {
      return typeOfExamination;
   }

   public void setTypeOfExamination(TypeOfExamination typeOfExamination) {
      this.typeOfExamination = typeOfExamination;
   }

   public Clinic getClinic() {
      return clinic;
   }

   public void setClinic(Clinic clinic) {
      this.clinic = clinic;
   }
}
