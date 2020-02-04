package com.project.tim49.service;

import com.project.tim49.dto.*;
import com.project.tim49.model.User;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    /*
     * Koriscenje klase za ocitavanje vrednosti iz application.properties fajla
     */
    @Autowired
    private Environment env;

    /*
     * Anotacija za oznacavanje asinhronog zadatka
     * Vise informacija na: https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#scheduling
     */
    @Async
    public void sendConfirmationEmail(RegistrationDTO user) throws MailException, InterruptedException {
        System.out.println("Slanje emaila...");

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(env.getProperty("spring.mail.username"));
        mail.setSubject("Clinical center: Finish your registration");
        mail.setText("Hello " + user.getName() + ",\n\nyour registration request at our clinical center has" +
                "been approved!\n\n" +
                "To confirm your email address, please click on the link below:\n\n" +
                "http://picici.herokuapp.com/auth/confirm_registration/"+user.getId()+
                "\n\nThank you for registering at our clinical center!\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail. Sorry about that.");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }

    @Async
    public void sendRegistrationDeniedEmail(RegistrationDTO user,String message) throws MailException, InterruptedException {
        System.out.println("Slanje emaila...");

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom("noreply@clinical.center.com");
        mail.setSubject("Clinical center: Registration request denied");
        mail.setText("Dear " + user.getName() + ",\n\nwe are sorry to inform you that your registration request at our clinical center has" +
                " been denied.\n" +
                "Here is an explanation from our team:\n\n" +
                ""+message+
                "\n\nPlease contact our support for further assistance.\n\nBest regards,\nClinical center team\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail. Sorry about that.");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }

    @Async
    public void sendVacationRequestApprovedEmail(UserDTO user) throws MailException,
            InterruptedException {
        System.out.println("Slanje emaila...");

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom("noreply@clinic.com");
        mail.setSubject("Clinic: Vacation request approved");
        mail.setText("Dear " + user.getName() + ",\n\nwe are happy to inform you that your vacation request at our " +
                "clinic has" +
                " been approved.\n" +
                "\n\nBest regards,\nClinical center team\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail.");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }

    @Async
    public void sendVacationRequestDeniedEmail(UserDTO user, String message) throws MailException,
            InterruptedException {
        System.out.println("Slanje emaila...");

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom("noreply@clinic.com");
        mail.setSubject("Clinic: Vacation request denied");
        mail.setText("Dear " + user.getName() + ",\n\nwe are sorry to inform you that your vacation request at our " +
                "clinic has" +
                " been denied.\n" +
                "Here is an explanation from our team:\n\n" +
                ""+message+
                "\n\nPlease contact our support for further assistance.\n\nBest regards,\nClinical center team\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail.");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }

    @Async
    public void sendNewAppointmentScheduled(String role, UserDTO patient, DoctorDTO doctor, DateTime date) throws MailException,
            InterruptedException {
        System.out.println("Slanje emaila...");
        String roleMessage;
        if (role.equals("doctor")){
            roleMessage = ",\n\nDoctor " + doctor.getName() + " " + doctor.getSurname() + " has scheduled a new appointment on " + date.toString(DateTimeFormat.forPattern("dd.MM.yyyy."));
        } else {
            roleMessage = ",\n\nYou have successfully scheduled a new appointment on " + date.toString(DateTimeFormat.forPattern("dd.MM.yyyy."));
        }

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(patient.getEmail());
        mail.setFrom("noreply@clinic.com");
        mail.setSubject("Clinic: New appointment scheduled");
        mail.setText("Dear " + patient.getName() +
                roleMessage +
                "\n\nYou will receive additional information about this appointment during this day when it gets approved by clinic administrator." +
                "\n\nBest regards,\nClinical center team\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail.");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }

    @Async
    public void sendAvailableAppointmentScheduled(AppointmentDTO appointmentDTO) throws MailException,
            InterruptedException {
        System.out.println("Slanje emaila...");
        PatientDTO patient = appointmentDTO.getPatient();
        DoctorDTO doctor = appointmentDTO.getDoctors().get(0);
        DateTime dateTime = new DateTime(appointmentDTO.getStartingDateAndTime()*1000);

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(patient.getEmail());
        mail.setFrom("noreply@clinic.com");
        mail.setSubject("Clinic: Available appointment scheduled");
        mail.setText("Dear " + patient.getName() + ",\n\nYou have successfully booked an appointment in " + appointmentDTO.getClinic().getName() +
                " clinic." +
                "\n\nAppointment info:" +
                "\nDoctor: " + doctor.getName() + " " + doctor.getSurname() +
                "\nType of examination: " + appointmentDTO.getTypeOfExamination().getName() +
                "\nOrdination name: " + appointmentDTO.getOrdination().getName() + ", Number: " + appointmentDTO.getOrdination().getNumber() +
                "\nDate and time: " + dateTime.toString(DateTimeFormat.forPattern("dd.MM.yyyy. HH:mm")) +
                "\nPrice: " + appointmentDTO.getPrice() +
                "\nDiscount: " + appointmentDTO.getDiscount() +
                "\nFinal price: " + (appointmentDTO.getPrice() - appointmentDTO.getDiscount()) +
                "\n\nBest regards,\nClinical center team\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail.");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }

    @Async
    public void sendAppointmentRequestApproved(AppointmentDTO appointmentDTO) throws MailException,
            InterruptedException {
        System.out.println("Slanje emaila pacijentu...");
        PatientDTO patient = appointmentDTO.getPatient();
        DoctorDTO doctor = appointmentDTO.getDoctors().get(0);
        DateTime dateTime = new DateTime(appointmentDTO.getStartingDateAndTime()*1000);

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(patient.getEmail());
        mail.setFrom("noreply@clinic.com");
        mail.setSubject("Clinic: Appointment scheduled");
        mail.setText("Dear " + patient.getName() + ",\n\nNew appointment in " + appointmentDTO.getClinic().getName() +
                " clinic." +
                "\n\nAppointment info:" +
                "\n\nDoctor: " + doctor.getName() + " " + doctor.getSurname() +
                "\nType of appointment: " + appointmentDTO.getTypeOfExamination().getName() +
                "\nOrdination name: " + appointmentDTO.getOrdination().getName() + ", Number: " + appointmentDTO.getOrdination().getNumber() +
                "\nDate and time: " + dateTime.toString(DateTimeFormat.forPattern("dd.MM.yyyy. HH:mm")) +
                "\nPrice: " + appointmentDTO.getPrice() +
                "\n\nBest regards,\nClinical center team\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail.");
        javaMailSender.send(mail);
        System.out.println("Email poslat pacijentu!");

        System.out.println("Slanje emaila doktorima...");
        for (DoctorDTO doc: appointmentDTO.getDoctors()){
            mail.setTo(doctor.getEmail());
            mail.setFrom("noreply@clinic.com");
            mail.setSubject("Clinic: Appointment scheduled");
            mail.setText("Dear " + doc.getName() + ",\n\nYou have a new appointment" +
                    "\n\nAppointment info:" +
                    "\nPatient: " + patient.getName() + " " + patient.getSurname() +
                    "\nType of examination: " + appointmentDTO.getTypeOfExamination().getName() +
                    "\nOrdination name: " + appointmentDTO.getOrdination().getName() + ", Number: " + appointmentDTO.getOrdination().getNumber() +
                    "\nDate and time: " + dateTime.toString(DateTimeFormat.forPattern("dd.MM.yyyy. HH:mm")) +
                    "\n\nBest regards,\nClinical center team\n\n\n\n" +
                    "If you don't know what this is about, then someone has probably" +
                    " entered your email address by mistake and you can ignore this e-mail.");
            javaMailSender.send(mail);
        }
        System.out.println("Email doktoru/doktorima poslat!");

    }

    @Async
    public void sendAppointmentRequestRejected(AppointmentDTO appointmentDTO,String message) throws MailException, InterruptedException {
        System.out.println("Slanje emaila...");

        PatientDTO patient = appointmentDTO.getPatient();
        DoctorDTO doctor = appointmentDTO.getDoctors().get(0);
        DateTime dateTime = new DateTime(appointmentDTO.getStartingDateAndTime()*1000);

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(patient.getEmail());
        mail.setFrom("noreply@clinical.center.com");
        mail.setSubject("Clinical center: Registration request denied");
        mail.setText("Dear " + patient.getName() + ",\n\nWe are sorry to inform you that your appointment request at our clinical center has" +
                " been denied.\n" +
                "Here is an explanation from our team:\n\n" +
                ""+message+
                "\n\nAppointment info:" +
                "\n\nDoctor: " + doctor.getName() + " " + doctor.getSurname() +
                "\nType of appointment: " + appointmentDTO.getTypeOfExamination().getName() +
                "\nDate and time: " + dateTime.toString(DateTimeFormat.forPattern("dd.MM.yyyy. HH:mm")) +
                "\n\nPlease contact our support for further assistance.\n\nBest regards,\nClinical center team\n\n\n\n" +
                "If you don't know what this is about, then someone has probably" +
                " entered your email address by mistake and you can ignore this e-mail. Sorry about that.");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }
}
