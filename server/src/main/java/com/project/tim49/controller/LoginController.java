package com.project.tim49.controller;

import com.project.tim49.dto.LoginDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.User;
import com.project.tim49.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping
    public ResponseEntity<String> getTest() {

        return ResponseEntity.ok("LoginController");
    }

    @PostMapping(path = "/login", consumes = "application/json", produces= "application/json")
    public ResponseEntity loginUser(@RequestBody LoginDTO loginDTO) {

        User temp = loginService.findOne(loginDTO.getEmail());

        if(temp != null) {
            if (temp.getPassword().equals(loginDTO.getPassword())) {
                UserDTO userDTO = new UserDTO(temp);
                return new ResponseEntity<>(userDTO, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Wrong password!", HttpStatus.UNAUTHORIZED);
            }
        }

        return new ResponseEntity<>("Wrong email!", HttpStatus.BAD_REQUEST);
    }
}
