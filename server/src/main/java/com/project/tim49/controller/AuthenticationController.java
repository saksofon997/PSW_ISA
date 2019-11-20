package com.project.tim49.controller;

import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.*;
import com.project.tim49.security.TokenUtils;
import com.project.tim49.security.auth.JwtAuthenticationRequest;
import com.project.tim49.service.UserService;
import com.project.tim49.service.impl.CustomUserDetailsService;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

    @Autowired
    TokenUtils tokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest,
                                                       HttpServletResponse response) throws AuthenticationException, IOException {

        Authentication authentication = null;
        try {
            authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
                            authenticationRequest.getPassword()));
        } catch (Exception e){
            return new ResponseEntity<>("Bad credentials", HttpStatus.BAD_REQUEST);
        }

        // Ubaci username + password u kontext
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Kreiraj token
        User user = (User) authentication.getPrincipal();
        String jwt = tokenUtils.generateToken(user.getEmail());
        int expiresIn = tokenUtils.getExpiredIn();

        // Provera promene passworda pri prvom loginu
        UserState userState = new UserState();
        userState.token = new UserTokenState(jwt, expiresIn);
        userState.passwordChanged = user.isPasswordChanged();

        if (user instanceof ClinicAdministrator){
            userState.user = new ClinicAdministratorDTO((ClinicAdministrator) user);
        } else if (user instanceof Doctor){
            userState.user = new DoctorDTO((Doctor)user);
        } else {
            userState.user = new UserDTO(user);
        }

        // Vrati token kao odgovor na uspesno autentifikaciju
        return ResponseEntity.ok(userState);
    }

    // Prepraviti da radi sa nasim RegistrationRequest i cuvanjem u bazi
    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public ResponseEntity<?> addUser(@RequestBody UserRequest userRequest, UriComponentsBuilder ucBuilder) {

        //prepraviti na email!!!
        User existUser = this.userService.findByEmail(userRequest.getEmail());
        if (existUser != null) {
            //naci dependency
            new ResponseEntity<>("Username already exists", HttpStatus.CONFLICT);
        }

        User user = this.userService.save(userRequest);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/api/user/{userId}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/refresh", method = RequestMethod.POST)
    public ResponseEntity<?> refreshAuthenticationToken(HttpServletRequest request) {

        String token = tokenUtils.getToken(request);
        String email = this.tokenUtils.getEmailFromToken(token);

        User user = (User) this.userDetailsService.loadUserByUsername(email); //loadUserByUsername zbog interfejsa

        //izbacili smo last pass reset date
        if (this.tokenUtils.canTokenBeRefreshed(token)) {
            String refreshedToken = tokenUtils.refreshToken(token);
            int expiresIn = tokenUtils.getExpiredIn();

            return ResponseEntity.ok(new UserTokenState(refreshedToken, expiresIn));
        } else {
            UserTokenState userTokenState = new UserTokenState();
            return ResponseEntity.badRequest().body(userTokenState);
        }
    }

    @RequestMapping(value = "/change-password", method = RequestMethod.POST)
    //@PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> changePassword(@RequestBody PasswordChanger passwordChanger) {
        userDetailsService.changePassword(passwordChanger.oldPassword, passwordChanger.newPassword);

        Map<String, String> result = new HashMap<>();
        result.put("result", "success");
        return ResponseEntity.accepted().body(result);
    }

    static class PasswordChanger {
        public String oldPassword;
        public String newPassword;
    }

    static class UserState {
        public UserTokenState token;
        public boolean passwordChanged;
        public UserDTO user;
    }
}
