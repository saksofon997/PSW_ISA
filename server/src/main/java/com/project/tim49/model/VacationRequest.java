package com.project.tim49.model; /***********************************************************************
 * Module:  VacationRequest.java
 * Author:  TIM 49
 * Purpose: Defines the Class VacationRequest
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class VacationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medicalStaff_id", referencedColumnName = "id")
    private User medicalStaff;

    @Column(name = "startDate", nullable = false)
    private Long startDate;

    @Column(name = "endDate", nullable = false)
    private Long endDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getMedicalStaff() {
        return medicalStaff;
    }

    public void setMedicalStaff(User medicalStaff) {
        this.medicalStaff = medicalStaff;
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
}
