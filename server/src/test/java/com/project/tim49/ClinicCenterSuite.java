package com.project.tim49;

import com.project.tim49.controller.AdminKcControllerTest;
import com.project.tim49.controller.AppointmentController;
import com.project.tim49.controller.AppointmentRequestControllerTest;
import com.project.tim49.service.*;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        //Controller tests
        AdminKcControllerTest.class,
        AppointmentController.class,
        AppointmentRequestControllerTest.class,
        //Service tests
        AppointmentRequestServiceTest.class,
        AppointmentServiceTest.class,
        ClinicServiceTest.class,
        DoctorServiceTest.class,
        PatientServiceTest.class,
        //Other tests
        RouterTest.class
})
public class ClinicCenterSuite {
}
