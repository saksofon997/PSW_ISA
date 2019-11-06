package com.project.tim49.Model; /***********************************************************************
 * Module:  RegistrationRequest.java
 * Author:  TIM 49
 * Purpose: Defines the Class RegistrationRequest
 ***********************************************************************/

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/** @pdOid 4355985e-4832-45cf-85ee-3ff79d778700 */
public class RegistrationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    /** @pdOid fa194ceb-09da-4302-ba7b-bb7ef7d93442 */
    private String password;
    /** @pdOid 1ee086fd-3ea7-4464-bd89-39b7fbde56c9 */
    private String name;
    /** @pdOid f65a9b10-7eb4-440c-a609-7a0333103fd2 */
    private String surname;
    /** @pdOid 2bf887fb-1ba6-4526-b509-f25fe7d83923 */
    private String address;
    /** @pdOid 50580283-13ac-4365-84a3-4f1fb7043878 */
    private String city;
    /** @pdOid 2aedf211-1f4d-465e-9d59-eee19ccc07c9 */
    private String state;
    /** @pdOid df6b2be9-90a1-4c0e-acc9-dd758d15f141 */
    private String phoneNumber;
    /** @pdOid 0699881a-a759-4e06-bd90-94c9b9f69a02 */
    private String upin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getUpin() {
        return upin;
    }

    public void setUpin(String upin) {
        this.upin = upin;
    }
}