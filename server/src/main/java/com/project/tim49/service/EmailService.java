package com.project.tim49.service;

import com.project.tim49.dto.RegistrationDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

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
                "http://localhost:8080/auth/confirm_registration/"+user.getId()+
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
}
