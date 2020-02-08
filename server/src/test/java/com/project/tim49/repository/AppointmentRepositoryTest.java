package com.project.tim49.repository;

import com.project.tim49.model.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class AppointmentRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    AppointmentRepository appointmentRepository;

    @Test
    public void findOneByIdAndLock() {
        List<Doctor> doctor = new ArrayList<>();
        List<Nurse> nurse = new ArrayList<>();
        List<Prescription> prescriptions = new ArrayList<>();
        List<Appointment> appointments  = new ArrayList<>();
        Set<ClinicPatient> cpatients = new HashSet<>();
        Set<ClinicTypeOfExamination> cTOE = new HashSet<>();
        List<ClinicAdministrator> cAdmins = new ArrayList<>();
        List<Ordination> ords = new ArrayList<>();

        Clinic clinic = new Clinic("Test","TestAddress","Testtown","TestState","TestDescription",5,5,ords,cAdmins,cTOE,cpatients,doctor,nurse,appointments,prescriptions);

        this.entityManager.persist(clinic);
        Ordination ordination = new Ordination("TestOrdName","20",clinic);
        this.entityManager.persist(ordination);
        TypeOfExamination typeOfExamination = new TypeOfExamination("TestType",false,cTOE);
        this.entityManager.persist(typeOfExamination);
        Appointment appointment = new Appointment(1581339000,1581341000,10*60*1000,
                1000,0,ordination,clinic,null,typeOfExamination,false,null,false,true);

        Appointment appointment1 = this.entityManager.persist(appointment);
        Appointment appointment2 = this.appointmentRepository.findOneByIdAndLock(appointment1.getId());

        assertEquals(appointment2.getId(),appointment1.getId());
    }

    @Test
    public void getByClinicAndPatientNullAndDeletedFalse() {
        List<Doctor> doctor = new ArrayList<>();
        List<Nurse> nurse = new ArrayList<>();
        List<Prescription> prescriptions = new ArrayList<>();
        List<Appointment> appointments  = new ArrayList<>();
        Set<ClinicPatient> cpatients = new HashSet<>();
        Set<ClinicTypeOfExamination> cTOE = new HashSet<>();
        List<ClinicAdministrator> cAdmins = new ArrayList<>();
        List<Ordination> ords = new ArrayList<>();

        Clinic clinic = new Clinic("Test","TestAddress","Testtown","TestState","TestDescription",5,5,ords,cAdmins,cTOE,cpatients,doctor,nurse,appointments,prescriptions);

        this.entityManager.persist(clinic);
        Ordination ordination = new Ordination("TestOrdName","20",clinic);
        this.entityManager.persist(ordination);
        TypeOfExamination typeOfExamination = new TypeOfExamination("TestType",false,cTOE);
        this.entityManager.persist(typeOfExamination);
        this.entityManager.persist(new Appointment(1581339000,1581341000,10*60*1000,
                1000,0,ordination,clinic,null,typeOfExamination,false,null,false,true));
        ArrayList<Appointment> result = appointmentRepository.getByClinicAndPatientNullAndDeletedFalse(clinic);
        assertEquals(result.get(0).getStartingDateAndTime(),1581339000);
    }

    @Test
    public void save() {
        List<Doctor> doctor = new ArrayList<>();
        List<Nurse> nurse = new ArrayList<>();
        List<Prescription> prescriptions = new ArrayList<>();
        List<Appointment> appointments  = new ArrayList<>();
        Set<ClinicPatient> cpatients = new HashSet<>();
        Set<ClinicTypeOfExamination> cTOE = new HashSet<>();
        List<ClinicAdministrator> cAdmins = new ArrayList<>();
        List<Ordination> ords = new ArrayList<>();

        Clinic clinic = new Clinic("Test","TestAddress","Testtown","TestState","TestDescription",5,5,ords,cAdmins,cTOE,cpatients,doctor,nurse,appointments,prescriptions);

        this.entityManager.persist(clinic);
        Ordination ordination = new Ordination("TestOrdName","20",clinic);
        this.entityManager.persist(ordination);
        TypeOfExamination typeOfExamination = new TypeOfExamination("TestType",false,cTOE);
        this.entityManager.persist(typeOfExamination);
        Appointment appointment = new Appointment(1581339000,1581341000,10*60*1000,
                1000,0,ordination,clinic,null,typeOfExamination,false,null,false,true);
        Appointment appointment1 = this.appointmentRepository.save(appointment);
        assertEquals(appointment1.getId(),this.entityManager.getId(appointment1));
    }
}
