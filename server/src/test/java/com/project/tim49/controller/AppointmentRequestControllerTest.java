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
import java.util.Optional;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public
class AppointmentRequestControllerTest {
    private static final String URL_PREFIX = "/api/appointmentRequest";

    private MediaType contentType = new MediaType(
            MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));

    @Autowired
    private TestRestTemplate restTemplate;
    HttpEntity<Object> httpEntity;

    @Test //positive
    public void scheduleAppointment() throws Exception{

        ResponseEntity<AuthenticationController.UserState> responseEntity =
                restTemplate.postForEntity("/auth/login",
                        new LoginDTO("patient1@kcv.rs", "123456"),
                        AuthenticationController.UserState.class);
        AuthenticationController.UserState userstatePatient = responseEntity.getBody();
        String accessToken = userstatePatient.token.getAccessToken();
        HttpHeaders header = new HttpHeaders();
        header.add("Authorization","Bearer " + accessToken);
        header.add("Content-Type", "application/json");

        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(null);
        apptSend.setStartingDateAndTime(1580886000);
        apptSend.setEndingDateAndTime(0);
        apptSend.setDuration(0);
        TypeOfExaminationDTO toedto = new TypeOfExaminationDTO();
        toedto.setId(2L);
        apptSend.setTypeOfExamination(toedto);
        OrdinationDTO orddto = new OrdinationDTO();
        orddto.setId(null);
        apptSend.setOrdination(orddto);
        apptSend.setPrice(3000);
        ClinicDTO cdto = new ClinicDTO();
        cdto.setId(1L);
        apptSend.setClinic(cdto);
        PatientDTO pdto = new PatientDTO();
        pdto.setId(23L);
        apptSend.setPatient(pdto);
        DoctorDTO ddto = new DoctorDTO();
        ddto.setId(11L);
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();

        httpEntity = new HttpEntity<>(ow.writeValueAsString(apptSend), header);

        ResponseEntity<AppointmentDTO> responseEntityAppointment =
                restTemplate.exchange(URL_PREFIX + "/scheduleNewAppointment", HttpMethod.POST, httpEntity, AppointmentDTO.class);

        //checks if starting appointment id equals return appointment id
        AppointmentDTO appt = responseEntityAppointment.getBody();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test //positive
    public void approveAppointmentRequest() throws Exception{

        ResponseEntity<AuthenticationController.UserState> responseEntity =
                restTemplate.postForEntity("/auth/login",
                        new LoginDTO("adminc1@kcv.rs", "123456"),
                        AuthenticationController.UserState.class);
        AuthenticationController.UserState userstatePatient = responseEntity.getBody();
        String accessToken = userstatePatient.token.getAccessToken();
        HttpHeaders header = new HttpHeaders();
        header.add("Authorization","Bearer " + accessToken);
        header.add("Content-Type", "application/json");

        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(2L);
        apptSend.setCompleted(false);
        apptSend.setDiscount(0);
        apptSend.setStartingDateAndTime(1581346800);
        apptSend.setEndingDateAndTime(1581347400);
        apptSend.setDuration(600000);

        TypeOfExaminationDTO toedto = new TypeOfExaminationDTO();
        toedto.setId(3L);
        apptSend.setTypeOfExamination(toedto);
        OrdinationDTO orddto = new OrdinationDTO();
        orddto.setId(1L);
        apptSend.setOrdination(orddto);
        apptSend.setPrice(500);
        ClinicDTO cdto = new ClinicDTO();
        cdto.setId(1L);
        apptSend.setClinic(cdto);
        PatientDTO pdto = new PatientDTO();
        pdto.setId(23L);
        apptSend.setPatient(pdto);
        DoctorDTO ddto = new DoctorDTO();
        ddto.setId(10L);
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();

        httpEntity = new HttpEntity<>(ow.writeValueAsString(apptSend), header);

        ResponseEntity<AppointmentDTO> responseEntityAppointment =
                restTemplate.exchange(URL_PREFIX + "/approveAppointmentRequest", HttpMethod.POST, httpEntity, AppointmentDTO.class);

        //checks if starting appointment id equals return appointment id
        AppointmentDTO appt = responseEntityAppointment.getBody();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(ClinicConstants.DB_ID, appt.getClinic().getId());
    }
}
