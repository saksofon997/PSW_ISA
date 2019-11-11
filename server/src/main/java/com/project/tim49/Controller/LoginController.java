package com.project.tim49.Controller;

import com.project.tim49.Dto.LoginDTO;
import com.project.tim49.Model.User;
import com.project.tim49.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    /*
    Tester metoda.
     */
    @GetMapping
    public ResponseEntity<String> getTest() {

        return ResponseEntity.ok("LoginController");
    }

    /*
    Pronalazi korisnika po emailu i vraća ga ukoliko postoji.
    - Ne znam kako se upravlja spring security-jem.
    - Treba doraditi.
     */
    @PostMapping(consumes = "application/json")
    public ResponseEntity<LoginDTO> loginUser(@RequestBody LoginDTO loginDTO) {

        User temp = loginService.findOne(loginDTO.getEmail());

        if(temp == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else if(temp.getPassword().equals(loginDTO.getPassword()))
            return new ResponseEntity<>(new LoginDTO(temp), HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
    }
}
