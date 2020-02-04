package com.project.tim49.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.project.tim49.constants.ClinicConstants;
import com.project.tim49.controller.AuthenticationController;
import com.project.tim49.dto.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.json.Json;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:test.properties")
public
class AppointmentRequestControllerTest {
    private static final String URL_PREFIX = "/api/appointmentRequest";

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
        headers.add("Content-Type", "application/json");
        httpEntity = new HttpEntity<Object>(headers);
    }

    @Test //positive
    public void scheduleAppointment() throws Exception{
        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(null);
        apptSend.setStartingDateAndTime(1582027900);
        apptSend.setEndingDateAndTime(1582028800);
        apptSend.setDuration(0);
        TypeOfExaminationDTO toedto = new TypeOfExaminationDTO();
        toedto.setId(2L);
        apptSend.setTypeOfExamination(toedto);
        OrdinationDTO orddto = new OrdinationDTO();
        orddto.setId(1L);
        apptSend.setOrdination(orddto);
        apptSend.setPrice(3000);
        ClinicDTO cdto = new ClinicDTO();
        cdto.setId(1L);
        apptSend.setClinic(cdto);
        PatientDTO pdto = new PatientDTO();
        pdto.setId(24L);
        apptSend.setPatient(pdto);
        DoctorDTO ddto = new DoctorDTO();
        ddto.setId(11L);
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();

        httpEntity = new HttpEntity<>(ow.writeValueAsString(apptSend), headers);

        ResponseEntity<AppointmentDTO> responseEntity =
                restTemplate.exchange(URL_PREFIX + "/scheduleNewAppointment", HttpMethod.POST, httpEntity, AppointmentDTO.class);

        //checks if starting appointment id equals return appointment id
        AppointmentDTO appt = responseEntity.getBody();
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(ClinicConstants.DB_ID, appt.getClinic().getId());
    }
}