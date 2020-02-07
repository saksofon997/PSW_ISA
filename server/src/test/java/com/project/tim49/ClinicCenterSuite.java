package com.project.tim49;

import com.project.tim49.controller.AdminKcControllerTest;
import com.project.tim49.controller.AppointmentController;
import com.project.tim49.controller.AppointmentControllerTest;
import com.project.tim49.controller.AppointmentRequestControllerTest;
import com.project.tim49.service.*;
import com.project.tim49.repository.AppointmentRepositoryTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        //Service tests
        AppointmentRequestServiceTest.class,
        AppointmentServiceTest.class,
        ClinicServiceTest.class,
        DoctorServiceTest.class,
        PatientServiceTest.class,
        //Controller tests
        AdminKcControllerTest.class,
        AppointmentControllerTest.class,
        AppointmentRequestControllerTest.class,

        //Repository tests
        AppointmentRepositoryTest.class,
        //Other tests
        //RouterTest.class
})
public class ClinicCenterSuite {
}
