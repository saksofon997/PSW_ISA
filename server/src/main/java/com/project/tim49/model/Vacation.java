package com.project.tim49.model;

import javax.persistence.*;

@Entity
public class Vacation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "medicalStaff_id", referencedColumnName = "id")
    private User medicalStaff;

    @Column(name = "startDate", nullable = false)
    private Long startDate;

    @Column(name = "endDate", nullable = false)
    private Long endDate;

    @Column(name = "approved", nullable = false)
    private boolean approved;

    @Version
    private Long version;

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }

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

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }
}
