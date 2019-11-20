package com.project.tim49.dto;

import com.project.tim49.model.User;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;

public class UserDTO {

    protected Long id;
    protected String email;
    //private String password;
    protected String name;
    protected String surname;
    protected String address;
    protected String city;
    protected String state;
    protected String phoneNumber;
    protected String upin;
    protected ArrayList<String> roles = new ArrayList<>();

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
        for (GrantedAuthority auth: user.getAuthorities()) {
            this.roles.add(auth.getAuthority());
        }
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

    public ArrayList<String> getRoles() {
        return roles;
    }

    public void setRoles(ArrayList<String>  roles) {
        this.roles = roles;
    }
}
