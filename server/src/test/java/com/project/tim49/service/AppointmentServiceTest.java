package com.project.tim49.service;
import com.project.tim49.dto.*;
import com.project.tim49.model.Appointment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public class AppointmentServiceTest {
    @Autowired
    AppointmentService appointmentService;

    @Test //positive
    @Transactional
    public void getClinicAvailableAppointmentsTest() throws Exception {
        Long clinicID = 1L;

        List<AppointmentDTO> appts = appointmentService.getClinicAvailableAppointments(clinicID);

        //size should be 1
        assertEquals(appts.size(), 1);
    }

    @Test //positive, also tests setAppointmentData
    @Transactional
    public void createAvailableAppointment() throws Exception {
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
        DoctorDTO ddto = new DoctorDTO();
        ddto.setId(11L);
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        appointmentService.createAvailableAppointment(apptSend);

        List<AppointmentDTO> appts = appointmentService.getClinicAvailableAppointments(1L);

        //new size should be 2
        assertEquals(appts.size(), 2);
    }

    @Test //positive
    @Transactional
    public void choseAvailableAppointmentTest() throws Exception {
        AppointmentDTO avAppt = appointmentService.getClinicAvailableAppointments(1L).get(0);

        Long apptID = avAppt.getId();
        Long patID = 24L;
        //choses first available appointment as patient with id 24
        AppointmentDTO chosenAppt = appointmentService.choseAvailableAppointment(apptID, patID);

        //ids should be equal
        assertEquals(chosenAppt.getId(), apptID);
        assertEquals(chosenAppt.getPatient().getId(), patID);
    }
}
