package com.project.tim49.service;

import com.project.tim49.dto.*;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AppointmentRequestServiceUnitTest {
    @MockBean
    private ClinicRepository clinicRepository;
    @MockBean
    private AppointmentRequestRepository appointmentRequestRepository;
    @MockBean
    private DoctorRepository doctorRepository;
    @MockBean
    private PatientRepository patientRepository;
    @MockBean
    private TypeOfExaminationRepository typeOfExaminationRepository;
    @MockBean
    private OrdinationRepository ordinationRepository;
    @MockBean
    private DoctorService doctorService;
    @MockBean
    private AppointmentService appointmentService;
    @MockBean
    private OrdinationService ordinationService;
    @Autowired
    private AppointmentRequestService appointmentRequestService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void getClinicAppointmentRequestsTest(){
        Clinic clinic = new Clinic();
        clinic.setId(1L);
        given(this.clinicRepository.findById(1L)).willReturn(java.util.Optional.of(clinic));

        ArrayList<AppointmentRequest> appointments = new ArrayList<>();
        AppointmentRequest a1 = new AppointmentRequest();
        a1.setId(1L);
        TypeOfExamination toe = new TypeOfExamination();
        toe.setId(2L);
        a1.setTypeOfExamination(toe);
        Ordination ord = new Ordination();
        ord.setId(1L);
        ord.setClinic(clinic);
        a1.setClinic(clinic);
        Doctor d = new Doctor();
        d.setId(11L);
        d.setClinic(clinic);
        ArrayList<Authority> auth = new ArrayList<>();
        auth.add(new Authority());
        d.setAuthorities(auth);
        a1.setDoctor(d);
        AppointmentRequest a2 = new AppointmentRequest();
        a2.setId(2L);
        a2.setTypeOfExamination(toe);
        a2.setClinic(clinic);
        a2.setDoctor(d);
        appointments.add(a1);
        appointments.add(a2);

        given(this.appointmentRequestRepository.getByClinicAndApprovedFalse(clinic)).willReturn(appointments);

        ArrayList<AppointmentDTO> appointmentDTOS = appointmentRequestService.getClinicAppointmentRequests(clinic.getId());

        assertEquals(2, appointmentDTOS.size());
    }

    @Test // setAppointmentRequestData also
    public void approveAppointmentRequestTest() throws RuntimeException{
        Clinic clinic = new Clinic();
        clinic.setId(1L);
        Doctor d = new Doctor();
        ArrayList<Authority> auth = new ArrayList<>();
        auth.add(new Authority());
        d.setAuthorities(auth);
        d.setId(11L);
        d.setClinic(clinic);
        Patient p = new Patient();
        p.setId(24L);
        p.setAuthorities(auth);
        TypeOfExamination t = new TypeOfExamination();
        t.setId(1L);
        given(this.doctorRepository.findOneByIdAndLock(d.getId())).willReturn(d);
        given(this.clinicRepository.findById(clinic.getId())).willReturn(java.util.Optional.of(clinic));
        given(this.patientRepository.findById(p.getId())).willReturn(java.util.Optional.of(p));
        given(this.typeOfExaminationRepository.findById(p.getId())).willReturn(java.util.Optional.of(t));

        AppointmentDTO apptSend = new AppointmentDTO();
        apptSend.setId(1L);
        apptSend.setStartingDateAndTime(1582027900);
        apptSend.setEndingDateAndTime(1582028500);
        apptSend.setDuration(10*60*100);
        TypeOfExaminationDTO toedto = new TypeOfExaminationDTO();
        toedto.setId(t.getId());
        apptSend.setTypeOfExamination(toedto);
        OrdinationDTO orddto = new OrdinationDTO();
        orddto.setId(1L);
        apptSend.setOrdination(orddto);
        apptSend.setPrice(3000);
        ClinicDTO cdto = new ClinicDTO();
        cdto.setId(clinic.getId());
        apptSend.setClinic(cdto);
        PatientDTO pdto = new PatientDTO();
        pdto.setId(p.getId());
        apptSend.setPatient(pdto);
        DoctorDTO ddto = new DoctorDTO();
        ddto.setId(d.getId());
        List<DoctorDTO> doclist = new ArrayList<>();
        doclist.add(ddto);
        apptSend.setDoctors(doclist);

        given(this.doctorService.isDuringDoctorWorkingHours(null, d, apptSend.getStartingDateAndTime(), apptSend.getDuration())).willReturn(true);
        given(this.doctorService.isAvailable(null, d, apptSend.getStartingDateAndTime(), apptSend.getDuration())).willReturn(true);

        AppointmentRequest request = new AppointmentRequest();
        request.setId(1L);
        request.setStartingDateAndTime(1582027900);
        request.setEndingDateAndTime(1582028500);
        request.setDuration(10*60*100);
        TypeOfExamination toe = new TypeOfExamination();
        toe.setId(2L);
        request.setTypeOfExamination(toe);
        Ordination ord = new Ordination();
        ord.setId(1L);
        ord.setClinic(clinic);
        given(this.ordinationRepository.findOneByIdAndLock(ord.getId())).willReturn(ord);
        given(this.ordinationService.isAvailable(null, ord, apptSend.getStartingDateAndTime(), apptSend.getDuration())).willReturn(true);

        request.setClinic(clinic);
        request.setPatient(p);
        request.setDoctor(d);

        Appointment appointment = new Appointment();
        appointment.setId(1L);
        appointment.setStartingDateAndTime(1582027900);
        appointment.setEndingDateAndTime(1582028500);
        appointment.setDuration(10*60*100);
        appointment.setTypeOfExamination(toe);
        appointment.setOrdination(ord);
        appointment.setClinic(clinic);
        appointment.setPatient(p);
        HashSet<Doctor> docs = new HashSet<>();
        docs.add(d);
        appointment.setDoctors(docs);
        given(this.appointmentService.setAppointmentData(apptSend)).willReturn(appointment);
        given(this.appointmentRequestRepository.findById(request.getId())).willReturn(java.util.Optional.of(request));
        given(this.appointmentService.save(appointment)).willReturn(appointment);

        //given(this.appointmentRequestService.setAppointmentRequestData(apptSend, request)).willReturn(request);
        AppointmentDTO saved = null;

        saved = appointmentRequestService.approveAppointmentRequest(apptSend);
        assertEquals(apptSend.getClinic().getId(), saved.getClinic().getId());
    }
}
