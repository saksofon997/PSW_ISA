package com.project.tim49;

import com.project.tim49.controller.AdminKcControllerTest;
import com.project.tim49.controller.AppointmentController;
import com.project.tim49.controller.AppointmentRequestControllerTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        AdminKcControllerTest.class,
        AppointmentController.class,
        AppointmentRequestControllerTest.class
})
public class ClinicCenterSuite {
}
