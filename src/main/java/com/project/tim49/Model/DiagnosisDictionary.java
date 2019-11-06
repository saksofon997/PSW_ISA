package com.project.tim49.Model; /***********************************************************************
 * Module:  DiagnosisDictionary.java
 * Author:  TIM 49
 * Purpose: Defines the Class DiagnosisDictionary
 ***********************************************************************/

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/** @pdOid fe840b40-19f9-4269-8d42-5b3de7fc97f7 */
public class DiagnosisDictionary {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   /** @pdOid fbe043fd-48d9-4069-bee6-ee8718ac37d9 */
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