package com.project.tim49.service;
import com.project.tim49.constants.ClinicConstants;
import com.project.tim49.dto.*;
import com.project.tim49.model.Appointment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.PessimisticLockingFailureException;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

//import javax.transaction.Transactional;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public class AppointmentServiceTest extends AbstractTransactionalJUnit4SpringContextTests {
    @Autowired
    AppointmentService appointmentService;

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

        List<AppointmentDTO> apptsBefore = appointmentService.getClinicAvailableAppointments(1L);

        appointmentService.createAvailableAppointment(apptSend);

        List<AppointmentDTO> apptsAfter = appointmentService.getClinicAvailableAppointments(1L);

        assertNotEquals(apptsBefore.size(), apptsAfter.size());
    }

    @Test //positive
    @Transactional
    public void getClinicAvailableAppointmentsTest() throws Exception {
        Long clinicID = 1L;

        List<AppointmentDTO> appts = appointmentService.getClinicAvailableAppointments(clinicID);

        //size should not be 0
        assertNotEquals(0, appts.size());
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

    @Test
    @Transactional
    public void choseTheSameAvailableAppointmentTest() throws Exception{
        final CountDownLatch latch = new CountDownLatch(2);
        Runnable r1 = () -> {
            try {
                Long apptID = ClinicConstants.DB_AVAILABLE_APPOINTMENT_ID;
                Long patID = 24L;
                AppointmentDTO chosenAppt = appointmentService.choseAvailableAppointment(apptID, patID);
                fail();
            }catch(Exception e) {
                assertTrue(e instanceof ValidationException);
            }

            latch.countDown();
        };
        Runnable r2 = () -> {
            try { Thread.sleep(3000); } catch (InterruptedException e) { }
            try {
                Long apptID = ClinicConstants.DB_AVAILABLE_APPOINTMENT_ID;
                Long patID = 25L;
                AppointmentDTO chosenAppt = appointmentService.choseAvailableAppointment(apptID, patID);
                fail();
            }catch(Exception e) {
                assertTrue(e instanceof ValidationException);
            }
            latch.countDown();
        };
        new Thread(r1).start();
        new Thread(r2).start();
        try {
            latch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
