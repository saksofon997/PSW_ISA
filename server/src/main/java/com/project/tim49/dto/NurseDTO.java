package com.project.tim49.dto;

import com.project.tim49.model.Nurse;
import org.springframework.security.core.GrantedAuthority;

public class NurseDTO extends UserDTO{

    private Long id;
    private String email;
    private String name;
    private String surname;
    private String address;
    private String city;
    private String state;
    private String phoneNumber;
    private String upin;

    private String shiftStart;
    private String shiftEnd;
    private Long clinic_id;
    private Long version;

    public NurseDTO() {
    }

    public NurseDTO(Nurse nurse){
        this.id = nurse.getId();
        this.email = nurse.getEmail();
        this.name = nurse.getName();
        this.surname = nurse.getSurname();
        this.address = nurse.getAddress();
        this.city = nurse.getCity();
        this.state = nurse.getState();
        this.phoneNumber = nurse.getPhoneNumber();
        this.upin = nurse.getUpin();
        this.shiftStart = nurse.getShiftStart();
        this.shiftEnd = nurse.getShiftEnd();
        this.clinic_id = nurse.getClinic().getId();
        for (GrantedAuthority auth: nurse.getAuthorities()) {
            this.roles.add(auth.getAuthority());
        }
        this.version = nurse.getVersion();
    }

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Override
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Override
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String getUpin() {
        return upin;
    }

    public void setUpin(String upin) {
        this.upin = upin;
    }

    public String getShiftStart() {
        return shiftStart;
    }

    public void setShiftStart(String shiftStart) {
        this.shiftStart = shiftStart;
    }

    public String getShiftEnd() {
        return shiftEnd;
    }

    public void setShiftEnd(String shiftEnd) {
        this.shiftEnd = shiftEnd;
    }

    public Long getClinic_id() {
        return clinic_id;
    }

    public void setClinic_id(Long clinic_id) {
        this.clinic_id = clinic_id;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }
}
