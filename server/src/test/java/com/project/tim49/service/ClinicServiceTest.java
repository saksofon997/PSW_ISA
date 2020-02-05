package com.project.tim49.service;
import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.ClinicsSearchResultDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.model.Clinic;
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
public class ClinicServiceTest {
    @Autowired
    ClinicService clinicService;

    @Test //positive
    public void findOneDTOTest() throws Exception {
        Optional<ClinicDTO> clinicDTO = Optional.ofNullable(clinicService.findOneDTO(1L));
        //ids should be equal
        assertEquals(Optional.ofNullable(clinicDTO.get().getId()), Optional.of(1L));
    }

    @Test(expected = ValidationException.class) //negative
    public void findOneDTOTestFail() throws Exception {
        ClinicDTO clinicDTO = clinicService.findOneDTO(10L);
    }

    @Test //positive
    public void findOneTest() throws Exception {
        Optional<Clinic> test = Optional.ofNullable(clinicService.findOne(1L));

        //checks ids
        assertEquals(Optional.ofNullable(test.get().getId()), Optional.of(1L));
    }


    @Test //positive
    @Transactional
    public void getClinicDoctorsTest() throws Exception {
        Long clinicID = 1L;

        List<DoctorDTO> doctorDTOS = clinicService.getClinicDoctors(clinicID);

        //size should be 3
        assertEquals(doctorDTOS.size(), 3);
    }

    @Test(expected = java.lang.NullPointerException.class) //negative
    public void getClinicDoctorsTestFail() throws Exception {
        Long clinicID = 10L;

        List<DoctorDTO> doctorDTOS = clinicService.getClinicDoctors(clinicID);
    }

    @Test //positive
    public void findAllTest() throws Exception {
        List<ClinicDTO> clinicDTOS = clinicService.findAll();
    }

    @Test //positive
    @Transactional
    public void getByQueryTest() throws Exception {
        List<ClinicsSearchResultDTO> searchResultDTOS = clinicService.getByQuery("", "", 1L, -1, 1582027900);
        //size should be 2
        assertEquals(searchResultDTOS.size(), 2);
    }
}
