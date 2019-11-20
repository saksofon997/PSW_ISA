package com.project.tim49.dto;

import com.project.tim49.model.ClinicAdministrator;
import org.springframework.security.core.GrantedAuthority;

public class ClinicAdministratorDTO extends UserDTO{

    private Long id;
    private String email;
    private String name;
    private String surname;
    private String address;
    private String city;
    private String state;
    private String phoneNumber;
    private String upin;
    private String role;
    private Long clinic_id;

    public ClinicAdministratorDTO() {

    }
    // PODESI KONSTRUKTORE
    public ClinicAdministratorDTO(ClinicAdministrator admin) {
        this.id = admin.getId();
        this.email = admin.getEmail();
        this.name = admin.getName();
        this.surname = admin.getSurname();
        this.address = admin.getAddress();
        this.city = admin.getCity();
        this.state = admin.getState();
        this.phoneNumber = admin.getPhoneNumber();
        this.upin = admin.getUpin();
        this.clinic_id = admin.getClinic().getId();
        for (GrantedAuthority auth: admin.getAuthorities()) {
            this.roles.add(auth.getAuthority());
        }
    }

    public ClinicAdministratorDTO(Long id, String email, String name, String surname, String address, String city, String state, String phoneNumber, String upin, String role, Long clinic_id) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.upin = upin;
        this.role = role;
        this.clinic_id = clinic_id;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getClinic_id() {
        return clinic_id;
    }

    public void setClinic_id(Long clinic_id) {
        this.clinic_id = clinic_id;
    }
}
