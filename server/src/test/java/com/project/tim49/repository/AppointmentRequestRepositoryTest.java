package com.project.tim49.repository;

import com.project.tim49.model.*;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.*;

public class AppointmentRequestRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    AppointmentRequestRepository appointmentRepository;
    @Test
    public void getByClinicAndApprovedFalse() {
    }

    @Test
    public void getAllByApprovedFalse() {
    }

    @Test
    public void getByTimesAndDoctor() {
    }
}
