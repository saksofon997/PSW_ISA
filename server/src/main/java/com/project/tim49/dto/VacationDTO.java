package com.project.tim49.dto;

import com.project.tim49.model.Vacation;

public class VacationDTO {

    private Long id;
    private long startDate;
    private long endDate;
    private long staffId;
    private boolean approved;

    public VacationDTO(Vacation vacation) {
        this.id = vacation.getId();
        this.startDate = vacation.getStartDate();
        this.endDate = vacation.getEndDate();
        this.staffId = vacation.getMedicalStaff().getId();
        this.approved = vacation.isApproved();
    }

    public VacationDTO(Long id, long startDate, long endDate, long staffId,
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

    public long getStartDate() {
        return startDate;
    }

    public void setStartDate(long startDate) {
        this.startDate = startDate;
    }

    public long getEndDate() {
        return endDate;
    }

    public void setEndDate(long endDate) {
        this.endDate = endDate;
    }

    public long getStaffId() {
        return staffId;
    }

    public void setStaffId(long staffId) {
        this.staffId = staffId;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}
