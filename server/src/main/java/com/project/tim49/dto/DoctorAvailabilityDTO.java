package com.project.tim49.dto;

import java.util.ArrayList;
import java.util.List;

public class DoctorAvailabilityDTO {

    private Long id;

    private boolean available;
    private List<String> availableTimes = new ArrayList<>();

    public DoctorAvailabilityDTO(){}

    public DoctorAvailabilityDTO(Long id, boolean available, List<String> availableTimes) {
        this.id = id;
        this.available = available;
        this.availableTimes = availableTimes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public List<String> getAvailableTimes() {
        return availableTimes;
    }

    public void setAvailableTimes(List<String> availableTimes) {
        this.availableTimes = availableTimes;
    }
}
