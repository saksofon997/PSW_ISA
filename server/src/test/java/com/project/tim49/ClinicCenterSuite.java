package com.project.tim49;

import com.project.tim49.controller.AdminKcControllerTest;
import com.project.tim49.controller.AppointmentController;
import com.project.tim49.controller.AppointmentRequestControllerTest;
import com.project.tim49.service.AppointmentRequestServiceTest;
import com.project.tim49.service.AppointmentServiceTest;
import com.project.tim49.service.ClinicServiceTest;
import com.project.tim49.service.DoctorServiceTest;
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
        //Other tests
        RouterTest.class
})
public class ClinicCenterSuite {
}
