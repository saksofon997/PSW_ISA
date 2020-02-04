package com.project.tim49.controller;

import com.project.tim49.constants.ClinicConstants;
import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.LoginDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.PostConstruct;
import java.nio.charset.Charset;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:test.properties")
public
class AppointmentControllerTest {
    private static final String URL_PREFIX = "/api/appointment";

    private MediaType contentType = new MediaType(
            MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));

    @Autowired
    private TestRestTemplate restTemplate;

    private String accessToken;
    HttpHeaders headers = new HttpHeaders();
    HttpEntity<Object> httpEntity;

    @Before
    public void login() {
        ResponseEntity<AuthenticationController.UserState> responseEntity =
                restTemplate.postForEntity("/auth/login",
                        new LoginDTO("patient1@kcv.rs", "123456"),
                        AuthenticationController.UserState.class);
        AuthenticationController.UserState userstate = responseEntity.getBody();
        accessToken = userstate.token.getAccessToken();
        headers.add("Authorization","Bearer " + accessToken);
        httpEntity = new HttpEntity<Object>(headers);
    }

    @Test //positive
    public void getClinicAvailableAppointments() throws Exception{
        ResponseEntity<AppointmentDTO[]> responseEntity =
                restTemplate.exchange(URL_PREFIX + "/getClinicAvailableAppointments/"+ClinicConstants.DB_ID, HttpMethod.GET, httpEntity, AppointmentDTO[].class);

        //checks if returns list
        AppointmentDTO[] appts = responseEntity.getBody();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assert appts != null;
    }

    @Test //positive
    public void choseAvailableAppointment() throws Exception{
        ResponseEntity<Long> responseEntity =
                restTemplate.exchange(URL_PREFIX + "/choseAvailableAppointment/"+ClinicConstants.DB_AVAILABLE_APPOINTMENT_ID+"/"+ClinicConstants.DB_PATIENT_ID, HttpMethod.PUT, httpEntity, Long.class, Long.class);

        //checks if starting id equals return id
        Long apptID = responseEntity.getBody();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(ClinicConstants.DB_AVAILABLE_APPOINTMENT_ID, apptID);
    }
}