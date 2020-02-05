package com.project.tim49.controller;

import static com.project.tim49.constants.ClinicConstants.*;
import static org.junit.Assert.assertEquals;

import com.project.tim49.constants.ClinicConstants;
import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.LoginDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;


import javax.annotation.PostConstruct;
import java.nio.charset.Charset;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public
class AdminKcControllerTest {
    private static final String URL_PREFIX = "/api/admin";

    private MediaType contentType = new MediaType(
            MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private Environment env;

    private String accessToken;
    HttpHeaders headers = new HttpHeaders();
    HttpEntity<Object> httpEntity;

    @Before
    public void login() {
        //System.out.println(env);
        ResponseEntity<AuthenticationController.UserState> responseEntity =
                restTemplate.postForEntity("/auth/login",
                        new LoginDTO("adminkc1@kcv.rs", "123456"),
                        AuthenticationController.UserState.class);
        // preuzmemo token jer ce nam trebati za testiranje REST kontrolera
        AuthenticationController.UserState userstate = responseEntity.getBody();
        accessToken = userstate.token.getAccessToken();
        headers.add("Authorization","Bearer " + accessToken);
        //kreiramo objekat koji saljemo u sklopu zahteva
        // objekat nema telo, vec samo zaglavlje, jer je rec o GET zahtevu
        httpEntity = new HttpEntity<Object>(headers);
    }

    @Test
    public void getClinic() throws Exception{
        ResponseEntity<ClinicDTO[]> responseEntity =
                restTemplate.exchange(URL_PREFIX + "/getClinics", HttpMethod.GET, httpEntity, ClinicDTO[].class);
        ClinicDTO[] clinics = responseEntity.getBody();

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(DB_COUNT, clinics.length);
        assertEquals(ClinicConstants.DB_ID, clinics[0].getId());
        assertEquals(DB_NAME, clinics[0].getName());
        assertEquals(DB_CITY, clinics[0].getCity());
        assertEquals(DB_ADDRESS, clinics[0].getAddress());
    }

    @Test
    public void getClinicById() throws Exception {

        ResponseEntity<ClinicDTO> responseEntity =
                restTemplate.exchange(URL_PREFIX + "/getClinic/"+ClinicConstants.DB_ID, HttpMethod.GET, httpEntity, ClinicDTO.class);
        ClinicDTO clinic = responseEntity.getBody();

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(ClinicConstants.DB_ID, clinic.getId());
        assertEquals(DB_NAME, clinic.getName());
        assertEquals(DB_CITY, clinic.getCity());
        assertEquals(DB_ADDRESS, clinic.getAddress());
    }
}
