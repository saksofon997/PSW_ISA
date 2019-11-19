package com.project.tim49.dto;

import com.project.tim49.model.User;

public class LoginDTO {
    
    private String email;
    private String password;


    public LoginDTO() {

    }

    public LoginDTO(User User) {
        this(User.getEmail(), User.getPassword());
    }

    public LoginDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
