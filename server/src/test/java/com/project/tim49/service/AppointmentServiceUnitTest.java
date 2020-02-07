package com.project.tim49.service;

import com.project.tim49.dto.*;
import com.project.tim49.model.*;
import com.project.tim49.repository.AppointmentRepository;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.PatientRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import static org.mockito.BDDMockito.*;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public class AppointmentServiceUnitTest {

    @MockBean
    private ClinicRepository clinicRepository;
    @MockBean
    private AppointmentRepository appointmentRepository;
    @MockBean
    private PatientRepository patientRepository;

    @Autowired
    private AppointmentService appointmentService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void getClinicAvailableAppointmentsTest()throws Exception {
        Clinic clinic = new Clinic();
        clinic.setId(1L);
        given(this.clinicRepository.findById(1L)).willReturn(java.util.Optional.of(clinic));

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

        given(this.appointmentRepository.getByClinicAndPatientNullAndDeletedFalse(clinic)).willReturn(appointments);

        ArrayList<AppointmentDTO> appointmentDTOS = appointmentService.getClinicAvailableAppointments(clinic.getId());

        assertEquals(2, appointmentDTOS.size());
    }

    @Test
    public void choseAvailableAppointmentTest() throws Exception{
        Patient patient = new Patient();
        patient.setId(1L);
        ArrayList<Authority> auth = new ArrayList<>();
        auth.add(new Authority());
        patient.setAuthorities(auth);
        given(this.patientRepository.findById(1L)).willReturn(java.util.Optional.of(patient));

        Clinic clinic = new Clinic();
        clinic.setId(1L);
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
        a1.setPatient(null);
        Doctor d = new Doctor();
        d.setId(11L);
        d.setClinic(clinic);
        d.setAuthorities(auth);
        Set<Doctor> doclist = new HashSet<>();
        doclist.add(d);
        a1.setDoctors(doclist);
        given(this.appointmentRepository.findOneByIdAndLock(1L)).willReturn(a1);

        given(this.appointmentRepository.save(a1)).willReturn(a1);

        AppointmentDTO app = appointmentService.choseAvailableAppointment(a1.getId(), patient.getId());
        assertEquals(a1.getId(), app.getId());
    }

    @Test(expected = ValidationException.class)
    public void choseAvailableAppointmentAlreadyTakenTest() throws Exception{
        Patient patient = new Patient();
        patient.setId(1L);
        ArrayList<Authority> auth = new ArrayList<>();
        auth.add(new Authority());
        patient.setAuthorities(auth);
        given(this.patientRepository.findById(1L)).willReturn(java.util.Optional.of(patient));

        Clinic clinic = new Clinic();
        clinic.setId(1L);
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
        a1.setPatient(null);
        Doctor d = new Doctor();
        d.setId(11L);
        d.setClinic(clinic);
        d.setAuthorities(auth);
        Set<Doctor> doclist = new HashSet<>();
        doclist.add(d);
        a1.setDoctors(doclist);
        a1.setPatient(patient);
        given(this.appointmentRepository.findOneByIdAndLock(1L)).willReturn(a1);

        given(this.appointmentRepository.save(a1)).willReturn(a1);

        AppointmentDTO app = appointmentService.choseAvailableAppointment(a1.getId(), patient.getId());
    }

}
