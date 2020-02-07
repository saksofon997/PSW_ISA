package com.project.tim49.controller;

import com.project.tim49.constants.ClinicConstants;
import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.LoginDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.AppointmentRepository;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.service.AppointmentService;
import com.project.tim49.service.EmailService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import static org.junit.Assert.*;
import static org.mockito.BDDMockito.given;

@TestPropertySource("classpath:unit-test.properties")
public class AppointmentControllerUnitTest extends ControllerUnitTest {

    private static final String URL_PREFIX = "/api/appointment";

    @Mock
    AppointmentService appointmentService;
    @Spy
    EmailService emailService;

    @InjectMocks
    AppointmentController appointmentController;

    @Override
    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mvc = MockMvcBuilders
                .standaloneSetup(appointmentController)
                .build();
    }

    @Test
    @WithMockUser(username = "patient1@kcv.rs", password = "123456", authorities = "PATIENT")
    public void getClinicAvailableAppointments() throws Exception {
        Clinic clinic = new Clinic();
        clinic.setId(1L);
        ArrayList<Appointment> appointments = new ArrayList<>();
        Appointment a1 = new Appointment();
        a1.setId(1L);
        TypeOfExamination toe = new TypeOfExamination();
        toe.setId(2L);
        a1.setTypeOfExamination(toe);
        Ordination ord = new Ordination();
        ord.setId(1L);
        ord.setClinic(clinic);
        a1.setOrdination(ord);
        Clinic c = new Clinic();
        c.setId(1L);
        a1.setClinic(c);
        Doctor d = new Doctor();
        d.setId(11L);
        d.setClinic(clinic);
        ArrayList<Authority> auth = new ArrayList<>();
        auth.add(new Authority());
        d.setAuthorities(auth);
        Set<Doctor> doclist = new HashSet<>();
        doclist.add(d);
        a1.setDoctors(doclist);
        Appointment a2 = new Appointment();
        a2.setId(2L);
        a2.setTypeOfExamination(toe);
        a2.setOrdination(ord);
        a2.setClinic(c);
        a2.setDoctors(doclist);
        appointments.add(a1);
        appointments.add(a2);
        ArrayList<AppointmentDTO> dtos = new ArrayList<>();
        dtos.add(new AppointmentDTO(a1));
        dtos.add(new AppointmentDTO(a2));
        given(this.appointmentService.getClinicAvailableAppointments(clinic.getId())).willReturn(dtos);

        String uri = URL_PREFIX + "/getClinicAvailableAppointments/"+ ClinicConstants.DB_ID;
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        AppointmentDTO[] availableAppointments = super.mapFromJson(content, AppointmentDTO[].class);

        assertEquals(dtos.size(), availableAppointments.length);
    }

    @Test
    @WithMockUser(username = "patient1@kcv.rs", password = "123456", authorities = "PATIENT")
    public void choseAvailableAppointment() throws Exception{
        Clinic clinic = new Clinic();
        clinic.setId(1L);
        Patient patient = new Patient();
        patient.setId(1L);
        Appointment a1 = new Appointment();
        a1.setId(1L);
        TypeOfExamination toe = new TypeOfExamination();
        toe.setId(2L);
        a1.setTypeOfExamination(toe);
        Ordination ord = new Ordination();
        ord.setId(1L);
        ord.setClinic(clinic);
        a1.setOrdination(ord);
        Clinic c = new Clinic();
        c.setId(1L);
        a1.setClinic(c);
        Doctor d = new Doctor();
        d.setId(11L);
        d.setClinic(clinic);
        ArrayList<Authority> auth = new ArrayList<>();
        auth.add(new Authority());
        d.setAuthorities(auth);
        Set<Doctor> doclist = new HashSet<>();
        doclist.add(d);
        a1.setDoctors(doclist);
        AppointmentDTO choosen = new AppointmentDTO(a1);
        given(this.appointmentService.choseAvailableAppointment(choosen.getId(), patient.getId())).willReturn(choosen);
        Mockito.doNothing().when(emailService).sendAvailableAppointmentScheduled(choosen);

        String uri = URL_PREFIX + "/choseAvailableAppointment/"+choosen.getId()+"/"+patient.getId();
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        AppointmentDTO availableAppointment = super.mapFromJson(content, AppointmentDTO.class);

        assertEquals(choosen.getId(), availableAppointment.getId());
    }

    @Test
    @WithMockUser(username = "patient1@kcv.rs", password = "123456", authorities = "PATIENT")
    public void choseAvailableAppointmentAlreadyTaken() throws Exception{
        Clinic clinic = new Clinic();
        clinic.setId(1L);
        Patient patient = new Patient();
        patient.setId(1L);
        Appointment a1 = new Appointment();
        a1.setId(1L);
        TypeOfExamination toe = new TypeOfExamination();
        toe.setId(2L);
        a1.setTypeOfExamination(toe);
        Ordination ord = new Ordination();
        ord.setId(1L);
        ord.setClinic(clinic);
        a1.setOrdination(ord);
        Clinic c = new Clinic();
        c.setId(1L);
        a1.setClinic(c);
        Doctor d = new Doctor();
        d.setId(11L);
        d.setClinic(clinic);
        ArrayList<Authority> auth = new ArrayList<>();
        auth.add(new Authority());
        d.setAuthorities(auth);
        Set<Doctor> doclist = new HashSet<>();
        doclist.add(d);
        a1.setDoctors(doclist);
        AppointmentDTO choosen = new AppointmentDTO(a1);
        given(this.appointmentService.choseAvailableAppointment(choosen.getId(), patient.getId())).willThrow(ValidationException.class);
        Mockito.doNothing().when(emailService).sendAvailableAppointmentScheduled(choosen);

        String uri = URL_PREFIX + "/choseAvailableAppointment/"+choosen.getId()+"/"+patient.getId();
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(422, status);
    }
}
