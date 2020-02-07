package com.project.tim49;

import com.project.tim49.controller.AdminKcControllerTest;
import com.project.tim49.controller.AppointmentControllerTest;
import com.project.tim49.controller.AppointmentControllerUnitTest;
import com.project.tim49.controller.AppointmentRequestControllerTest;
import com.project.tim49.repository.AppointmentRepositoryTest;
import com.project.tim49.service.*;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        //controller
        AppointmentControllerUnitTest.class,

        //service
        AppointmentServiceUnitTest.class,
        AppointmentRequestServiceUnitTest.class
})
public class ClinicCenterUnitSuite {
}
