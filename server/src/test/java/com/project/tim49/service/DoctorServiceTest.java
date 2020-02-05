package com.project.tim49.service;
import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.DoctorDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public class DoctorServiceTest {
    @Autowired
    DoctorService doctorService;

    @Test //positive
    @Transactional
    public void getDoctorsTest() throws Exception {
        Long clinicID = 1L;
        List<DoctorDTO> docs = doctorService.getDoctors(clinicID);
        Long docID = 10L;
        //doctors ids should match
        assertEquals(docs.get(0).getId(), docID);
    }

    @Test(expected = ValidationException.class) //negative
    @Transactional
    public void getDoctorsTestFail() throws Exception {
        Long clinicID = 12L;
        //clinic does not exist
        List<DoctorDTO> docs = doctorService.getDoctors(clinicID);
        Long docID = 10L;
        assertEquals(docs.get(0).getId(), docID);
    }

    @Test //positive
    @Transactional
    public void getAppointmentsTest() throws Exception {
        Long docID = 10L;
        List<AppointmentDTO> appointmentDTOList = doctorService.getAppointments(docID);
        //list should not be empty
        assertEquals(appointmentDTOList.isEmpty(), false);
    }

    @Test //positive
    @Transactional
    public void getOneAppointment() throws Exception {
        Long docID = 10L;
        Long appID = 1L;
        AppointmentDTO appt = doctorService.getOneAppointment(docID, appID);
        //ids should match
        assertEquals(appt.getId(), appID);
        assertEquals(appt.getDoctors().get(0).getId(), docID);
    }

    @Test
    @Transactional
    public void getDoctorTest() throws Exception {
        Long docID = 10L;
        DoctorDTO doctorDTO = doctorService.getDoctor(docID);
        //doctors ids should match
        assertEquals(doctorDTO.getId(), docID);
    }
}
