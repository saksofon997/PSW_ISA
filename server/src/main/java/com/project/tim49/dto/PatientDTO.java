package com.project.tim49.dto;

import com.project.tim49.model.Doctor;
import com.project.tim49.model.Patient;
import org.springframework.security.core.GrantedAuthority;

public class PatientDTO extends UserDTO{

    private Long id;
    private String email;
    private String name;
    private String surname;
    private String address;
    private String city;
    private String state;
    private String phoneNumber;
    private String upin;


    public PatientDTO() {
    }

    public PatientDTO(Patient patient){
        this.id = patient.getId();
        this.email = patient.getEmail();
        this.name = patient.getName();
        this.surname = patient.getSurname();
        this.address = patient.getAddress();
        this.city = patient.getCity();
        this.state = patient.getState();
        this.phoneNumber = patient.getPhoneNumber();
        this.upin = patient.getUpin();
        for (GrantedAuthority auth: patient.getAuthorities()) {
            this.roles.add(auth.getAuthority());
        }
    }

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
