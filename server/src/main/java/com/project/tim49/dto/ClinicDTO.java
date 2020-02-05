package com.project.tim49.dto;

import com.project.tim49.model.Clinic;

public class ClinicDTO {

    private Long id;
    private String name;
    private String address;
    private String city;
    private String state;
    private String description;
    private int numberOfStars;
    private int numberOfReviews;
    private Long version;

    public ClinicDTO(){

    }

    public ClinicDTO(Clinic clinic) {
        this.id = clinic.getId();
        this.name = clinic.getName();
        this.address = clinic.getAddress();
        this.city = clinic.getCity();
        this.state = clinic.getState();
        this.description = clinic.getDescription();
        this.numberOfStars = clinic.getNumberOfStars();
        this.numberOfReviews = clinic.getNumberOfReviews();
        this.version = clinic.getVersion();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
