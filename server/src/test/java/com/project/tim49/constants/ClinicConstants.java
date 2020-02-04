package com.project.tim49.constants;

public class ClinicConstants {
	public static final String NEW_FIRST_NAME = "John";
    public static final String NEW_LAST_NAME = "Doe";
    public static final String NEW_CARD_NUMBER = "X123";
    
    public static final Long DB_ID = 1L;
    public static final String DB_NAME = "Healty living";
    public static final String DB_CITY = "Novi Sad";
    public static final String DB_ADDRESS = "Nikole Pasica/13";
    
    //Clinic administrator
    public static final Long DB_CLINIC_ADMIN_ID = 4L;
    public static final String DB_CLINIC_ADMIN_NAME = "Jagoda";
    public static final String DB_CLINIC_ADMIN_EMAIL = "adminc1@kcv.rs";
    public static final Long DB_CLINIC_ADMIN_UPIN = 1011990100010L;
    
    //id of a student who is referenced by other entities
    public static final Long DB_ID_REFERENCED = 1L; 
    
    //number of courses enrolled by student with ID DB_ID_REFERENCED
    public static final int DB_COUNT_STUDENT_COURSES = 2;
    
    //number of exams for student with ID DB_ID_REFERENCED
    public static final int DB_COUNT_STUDENT_EXAMS = 2;
    
    public static final int DB_COUNT = 5;
    public static final int DB_CLINIC_ADMIN_COUNT = 6;
    public static final int PAGE_SIZE = 5;
}
