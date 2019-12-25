package com.project.tim49.dto;

import com.project.tim49.model.Vacation;

public class VacationDTO {

    private Long id;
    private Long startDate;
    private Long endDate;
    private Long staffId;
    private boolean approved;

    public VacationDTO(){

    }

    public VacationDTO(Vacation vacation) {
        this.id = vacation.getId();
        this.startDate = vacation.getStartDate();
        this.endDate = vacation.getEndDate();
        this.staffId = vacation.getMedicalStaff().getId();
        this.approved = vacation.isApproved();
    }

    public VacationDTO(Long id, Long startDate, Long endDate, Long staffId,
                       boolean approved) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.staffId = staffId;
        this.approved = approved;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStartDate() {
        return startDate;
    }

    public void setStartDate(Long startDate) {
        this.startDate = startDate;
    }

    public Long getEndDate() {
        return endDate;
    }

    public void setEndDate(Long endDate) {
        this.endDate = endDate;
    }

    public Long getStaffId() {
        return staffId;
    }

    public void setStaffId(Long staffId) {
        this.staffId = staffId;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}
