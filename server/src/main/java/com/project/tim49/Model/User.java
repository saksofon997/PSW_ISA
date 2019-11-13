package com.project.tim49.Model; /***********************************************************************
 * Module:  User.java
 * Author:  TIM 49
 * Purpose: Defines the Class User
 ***********************************************************************/

import javax.persistence.*;

@Entity(name ="users")
@Table
@Inheritance( strategy = InheritanceType.TABLE_PER_CLASS )
public class User {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;

   @Column(name = "email", nullable = false, unique = true)
   private String email;

   @Column(name = "password", nullable = false)
   private String password;

   @Column(name = "name")
   private String name;

   @Column(name = "surname")
   private String surname;

   @Column(name = "address")
   private String address;

   @Column(name = "city")
   private String city;

   @Column(name = "state")
   private String state;

   @Column(name = "phoneNumber")
   private String phoneNumber;

   @Column(name = "upin")
   private String upin;

   @Column(name = "role", nullable = false)
   private String role;

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

   public String getRole() {
      return role;
   }

   public void setRole(String role) {
      this.role = role;
   }
}