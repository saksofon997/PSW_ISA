package com.project.tim49.dto;

import com.project.tim49.model.Doctor;
import org.springframework.security.core.GrantedAuthority;

public class DoctorDTO extends UserDTO{

    private Long id;
    private String email;
    private String name;
    private String surname;
    private String address;
    private String city;
    private String state;
    private String phoneNumber;
    private String upin;

    private String shiftStart;
    private String shiftEnd;
    private Long clinic_id;
    private TypeOfExaminationDTO specialization;
    private int numberOfStars;
    private int numberOfReviews;
    private Long version;

    public DoctorDTO() {
    }

    public DoctorDTO(Doctor doctor){
        this.id = doctor.getId();
        this.email = doctor.getEmail();
        this.name = doctor.getName();
        this.surname = doctor.getSurname();
        this.address = doctor.getAddress();
        this.city = doctor.getCity();
        this.state = doctor.getState();
        this.phoneNumber = doctor.getPhoneNumber();
        this.upin = doctor.getUpin();
        this.shiftStart = doctor.getShiftStart();
        this.shiftEnd = doctor.getShiftEnd();
        this.clinic_id = doctor.getClinic().getId();
        if (doctor.getSpecialization() != null){
            this.specialization = new TypeOfExaminationDTO(doctor.getSpecialization());
        }
        this.numberOfStars = doctor.getNumberOfStars();
        this.numberOfReviews = doctor.getNumberOfReviews();
        for (GrantedAuthority auth: doctor.getAuthorities()) {
            this.roles.add(auth.getAuthority());
        }
        this.version = doctor.getVersion();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getUpin() {
        return upin;
    }

    public void setUpin(String upin) {
        this.upin = upin;
    }

    public String getShiftStart() {
        return shiftStart;
    }

    public void setShiftStart(String shiftStart) {
        this.shiftStart = shiftStart;
    }

    public String getShiftEnd() {
        return shiftEnd;
    }

    public void setShiftEnd(String shiftEnd) {
        this.shiftEnd = shiftEnd;
    }

    public Long getClinic_id() {
        return clinic_id;
    }

    public void setClinic_id(Long clinic_id) {
        this.clinic_id = clinic_id;
    }

    public TypeOfExaminationDTO getSpecialization() {
        return specialization;
    }

    public void setSpecialization(TypeOfExaminationDTO specialization) {
        this.specialization = specialization;
    }

    public int getNumberOfStars() {
        return numberOfStars;
    }

    public void setNumberOfStars(int numberOfStars) {
        this.numberOfStars = numberOfStars;
    }

    public int getNumberOfReviews() {
        return numberOfReviews;
    }

    public void setNumberOfReviews(int numberOfReviews) {
        this.numberOfReviews = numberOfReviews;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }
}
