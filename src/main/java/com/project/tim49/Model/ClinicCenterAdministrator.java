package com.project.tim49.Model; /***********************************************************************
 * Module:  ClinicCenterAdministrator.java
 * Author:  TIM 49
 * Purpose: Defines the Class ClinicCenterAdministrator
 ***********************************************************************/

import javax.persistence.Id;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/** @pdOid a921f3ad-f493-46e0-8f88-7b389e4f8363 */
public class ClinicCenterAdministrator extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}