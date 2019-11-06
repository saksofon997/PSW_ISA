package com.project.tim49.Model; /***********************************************************************
 * Module:  Pricelist.java
 * Author:  TIM 49
 * Purpose: Defines the Class Pricelist
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @pdOid 055f0e6f-f58f-4dc8-baf0-3b984077cd56
 */
public class Pricelist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private float price;
    /**
     * @pdRoleInfo migr=no name=TypeOfExamination assc=association16 coll=java.util.Collection impl=java.util.HashSet mult=0..*
     */
    private TypeOfExamination typeOfExamination;
    /**
     * @pdRoleInfo migr=no name=Clinic assc=association18 mult=1..1
     */
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