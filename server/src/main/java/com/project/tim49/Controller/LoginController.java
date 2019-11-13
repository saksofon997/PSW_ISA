package com.project.tim49.Controller;

import com.project.tim49.Dto.LoginDTO;
import com.project.tim49.Dto.UserDTO;
import com.project.tim49.Model.User;
import com.project.tim49.Service.LoginService;
import net.minidev.json.JSONObject;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping
    public ResponseEntity<String> getTest() {

        return ResponseEntity.ok("LoginController");
    }

    @PostMapping(consumes = "application/json", produces= "application/json")
    public ResponseEntity<UserDTO> loginUser(@RequestBody LoginDTO loginDTO) {

        User temp = loginService.findOne(loginDTO.getEmail());

        HttpHeaders hdr = new HttpHeaders();

        if(temp != null) {
            if (temp.getPassword().equals(loginDTO.getPassword())) {
                UserDTO userDTO = new UserDTO(temp);
                return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
            } else {
                hdr.set("Response", "Password does not match!");
                return new ResponseEntity<>(null, hdr, HttpStatus.CREATED);
            }
        }

        hdr.set("Response", "User does not exist!");
        return new ResponseEntity<UserDTO>(null, hdr,
                HttpStatus.CREATED);
    }
}
