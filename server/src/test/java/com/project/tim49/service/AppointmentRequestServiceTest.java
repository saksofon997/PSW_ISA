package com.project.tim49.service;

import com.project.tim49.dto.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:test.properties")
public class AppointmentRequestServiceTest {
    @Autowired
    AppointmentRequestService appointmentRequestService;

    @Test //positive, tests setAppointmentRequestData also
    @Transactional
    public void scheduleNewAppointmentTest() throws Exception {
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

        //successful if apptResp is not null
        AppointmentDTO apptResp = appointmentRequestService.scheduleNewAppointment(apptSend);
        assertNotNull(apptResp);
    }

    @Test
    @Transactional
    public void approveAppointmentRequest() throws Exception {
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

        //successful if apptResp is not null
        AppointmentDTO apptResp = appointmentRequestService.scheduleNewAppointment(apptSend);
        assertNotNull(apptResp);
    }
}
