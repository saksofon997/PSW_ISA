package com.project.tim49.Dto;

import com.project.tim49.Model.User;

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
