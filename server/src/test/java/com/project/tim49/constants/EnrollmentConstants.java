package com.project.tim49.constants;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class EnrollmentConstants {
	private static final Calendar startDateCalendar;
	private static final Calendar endDateCalendar;

	static {
	    startDateCalendar = GregorianCalendar.getInstance();
	    startDateCalendar.clear();
	    startDateCalendar.set(2015, 0, 1);
	    endDateCalendar = GregorianCalendar.getInstance();
	    endDateCalendar.clear();
	    endDateCalendar.set(2015, 5, 1);
	}
	public static final Long DB_ID = 1L;
	
	public static final Date DB_START_DATE = startDateCalendar.getTime();   
	public static final Date DB_END_DATE = endDateCalendar.getTime();
	public static final Long DB_COURSE_ID = 1L;
	public static final Long DB_STUDENT_ID = 1L;
}
