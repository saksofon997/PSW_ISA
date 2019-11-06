package com.project.tim49.Model; /***********************************************************************
 * Module:  MedicationDictionary.java
 * Author:  TIM 49
 * Purpose: Defines the Class MedicationDictionary
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/** @pdOid f70382a2-02e4-4f41-8f08-4267892a1d30 */
public class MedicationDictionary {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   /** @pdOid 03bd0c41-45f1-4735-b227-fd80550b27e2 */
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