package com.project.tim49;

import com.project.tim49.controller.AdminKcControllerTest;
import com.project.tim49.repository.AppointmentRepositoryTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        AppointmentRepositoryTest.class,
        AdminKcControllerTest.class,
        RouterTest.class


})
public class ClinicCenterSuite {
}
