package com.project.tim49.Dto;

import com.project.tim49.Model.User;

public class UserDTO {

    private Long id;
    private String email;
    //private String password;
    private String name;
    private String surname;
    private String address;
    private String city;
    private String state;
    private String phoneNumber;
    private String upin;
    private String role;

    public UserDTO() {

    }

    public UserDTO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        //this.password = user.getPassword();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.address = user.getAddress();
        this.city = user.getCity();
        this.state = user.getState();
        this.phoneNumber = user.getPhoneNumber();
        this.upin = user.getUpin();
        this.role = user.getRole();
    }

    public UserDTO(Long id, String email, String name, String surname, String address, String city, String state, String phoneNumber, String upin, String role) {
        this.id = id;
        this.email = email;
        //this.password = password;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.upin = upin;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getUpin() {
        return upin;
    }

    public String getRole() {
        return role;
    }
}
