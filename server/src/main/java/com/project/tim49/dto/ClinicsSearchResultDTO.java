package com.project.tim49.dto;

import com.project.tim49.model.Clinic;

public class ClinicsSearchResultDTO {

    private Long id;
    private String name;
    private String address;
    private String city;
    private String state;
    private String description;
    private int numberOfStars;
    private int numberOfReviews;

    private TypeOfExaminationDTO typeOfExamination;

    public ClinicsSearchResultDTO(Long id, String name, String address, String city, String state, String description, int numberOfStars, int numberOfReviews, TypeOfExaminationDTO typeOfExamination) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.description = description;
        this.numberOfStars = numberOfStars;
        this.numberOfReviews = numberOfReviews;
        this.typeOfExamination = typeOfExamination;
    }

    public ClinicsSearchResultDTO(Clinic clinic) {
        this.id = clinic.getId();
        this.name = clinic.getName();
        this.address = clinic.getAddress();
        this.city = clinic.getCity();
        this.state = clinic.getState();
        this.description = clinic.getDescription();
        this.numberOfStars = clinic.getNumberOfStars();
        this.numberOfReviews = clinic.getNumberOfReviews();
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

    public TypeOfExaminationDTO getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExaminationDTO typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }
}
