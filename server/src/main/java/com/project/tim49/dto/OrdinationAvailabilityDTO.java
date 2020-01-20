package com.project.tim49.dto;

import com.project.tim49.model.Ordination;

import java.util.ArrayList;

public class OrdinationAvailabilityDTO {

    private Long id;
    private String name;
    private String number;
    private Long clinic_id;

    private boolean available;
    private ArrayList<String> availablePeriods = new ArrayList<>();
    private long firstAvailableDateTimestamp;

    public OrdinationAvailabilityDTO() {

    }

    public OrdinationAvailabilityDTO(Long id, String name, String number, Long clinic_id, boolean available, ArrayList<String> availablePeriods, long firstAvailableDateTimestamp) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.clinic_id = clinic_id;
        this.available = available;
        this.availablePeriods = availablePeriods;
        this.firstAvailableDateTimestamp = firstAvailableDateTimestamp;
    }

    public OrdinationAvailabilityDTO(Ordination ord) {
        this.id = ord.getId();
        this.name = ord.getName();
        this.number = ord.getNumber();
        this.clinic_id = ord.getClinic().getId();
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

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Long getClinic_id() {
        return clinic_id;
    }

    public void setClinic_id(Long clinic_id) {
        this.clinic_id = clinic_id;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public ArrayList<String> getAvailablePeriods() {
        return availablePeriods;
    }

    public void setAvailablePeriods(ArrayList<String> availablePeriods) {
        this.availablePeriods = availablePeriods;
    }

    public long getFirstAvailableDateTimestamp() {
        return firstAvailableDateTimestamp;
    }

    public void setFirstAvailableDateTimestamp(long firstAvailableDateTimestamp) {
        this.firstAvailableDateTimestamp = firstAvailableDateTimestamp;
    }
}
