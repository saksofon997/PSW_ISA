package com.project.tim49.dto;

import com.project.tim49.model.Vacation;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;


public class VacationDTO {

    private Long id;
    private Long startDate;
    private Long endDate;
    private Long staffId;
    private ArrayList<String> roles = new ArrayList<>();
    private String staffName;
    private String staffSurname;
    private boolean approved;

    public VacationDTO(){

    }

    public VacationDTO(Vacation vacation) {
        this.id = vacation.getId();
        this.startDate = vacation.getStartDate();
        this.endDate = vacation.getEndDate();
        this.staffId = vacation.getMedicalStaff().getId();
        for (GrantedAuthority auth: vacation.getMedicalStaff().getAuthorities()) {
            this.roles.add(auth.getAuthority());
        }
        this.staffName = vacation.getMedicalStaff().getName();
        this.staffSurname = vacation.getMedicalStaff().getSurname();
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

    public ArrayList<String> getRoles() {
        return roles;
    }

    public void setRoles(ArrayList<String> roles) {
        this.roles = roles;
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    public String getStaffSurname() {
        return staffSurname;
    }

    public void setStaffSurname(String staffSurname) {
        this.staffSurname = staffSurname;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}
