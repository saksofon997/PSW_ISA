package com.project.tim49.service;

import com.project.tim49.dto.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringRunner;

import org.springframework.transaction.annotation.Transactional;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public class AppointmentRequestServiceTest extends AbstractTransactionalJUnit4SpringContextTests {
    @Autowired
    AppointmentRequestService appointmentRequestService;

    @Test //positive, tests setAppointmentRequestData also
    @Transactional
    @Rollback(true)
    public void scheduleNewAppointmentTest() throws Exception {
        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(null);
        apptSend.setStartingDateAndTime(1582027900);
        apptSend.setEndingDateAndTime(1582028500);
        apptSend.setDuration(10*60*100);
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

    @Test(expected = ValidationException.class) //negative
    @Transactional
    @Rollback(true)
    public void scheduleNewAppointmentDoctorNotAvailableTest() throws Exception {
        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(null);
        apptSend.setStartingDateAndTime(1581336000);
        apptSend.setEndingDateAndTime(1581336600);
        apptSend.setDuration(10*60*100);
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
        ddto.setId(10L);
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        //successful if apptResp is not null
        AppointmentDTO apptResp = appointmentRequestService.scheduleNewAppointment(apptSend);
        assertNotNull(apptResp);
    }

    @Test(expected = ValidationException.class) //negative
    @Transactional
    @Rollback(true)
    public void scheduleNewAppointmentNotDuringWorkingHoursTest() throws Exception {
        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(null);
        apptSend.setStartingDateAndTime(1581498000);
        apptSend.setEndingDateAndTime(1581498600);
        apptSend.setDuration(10*60*100);
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
        ddto.setId(10L);
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        //successful if apptResp is not null
        AppointmentDTO apptResp = appointmentRequestService.scheduleNewAppointment(apptSend);
        assertNotNull(apptResp);
    }

    @Test //positive
    @Transactional
    @Rollback(true)
    public void approveAppointmentRequest() throws Exception {
        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(4L);
        apptSend.setStartingDateAndTime(1582028500);
        apptSend.setEndingDateAndTime(1582029100);
        apptSend.setDuration(10*60*100);
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
        AppointmentDTO apptResp = appointmentRequestService.approveAppointmentRequest(apptSend);
        assertNotNull(apptResp);
    }

    @Test(expected = ValidationException.class) //negative
    @Transactional
    @Rollback(true)
    public void approveAppointmentRequestOrdinationNotAvailable() throws Exception {
        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(3L);
        apptSend.setStartingDateAndTime(1581519600);
        apptSend.setEndingDateAndTime(1581520200);
        apptSend.setDuration(10*60*100);
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
        ddto.setId(12L);
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        //successful if apptResp is not null
        AppointmentDTO apptResp = appointmentRequestService.approveAppointmentRequest(apptSend);
        assertNotNull(apptResp);
    }
}
