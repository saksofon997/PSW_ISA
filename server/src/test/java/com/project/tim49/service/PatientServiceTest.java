package com.project.tim49.service;
import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.MedicalRecordDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.repository.MedicationRepository;
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
public class PatientServiceTest {
    @Autowired
    PatientService patientService;

    @Test //positive
    @Transactional
    public void findByIdTest() throws Exception {
        Long patID = 23L;

        UserDTO userDTO = patientService.findById(patID);
        //ids should match
        assertEquals(userDTO.getId(), patID);
    }

    @Test(expected = ValidationException.class) //negative
    @Transactional
    public void findByIdTestFail() throws Exception {
        Long patID = 230L;
        //non existant id
        UserDTO userDTO = patientService.findById(patID);
    }

    @Test //positive
    @Transactional
    public void getPendingAppointmentsTest() throws Exception {
        Long patID = 23L;

        List<AppointmentDTO> appts = patientService.getPendingAppointments(patID);
        assertNotEquals(appts.size(), 0);
    }

    @Test
    @Transactional
    public void getMedicalRecord() throws Exception {
        Long patID = 23L;

        MedicalRecordDTO medicalRecordDTO = patientService.getMedicalRecord(patID);
        assertNotEquals(medicalRecordDTO, null);
    }
}
