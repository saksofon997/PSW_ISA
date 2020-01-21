package com.project.tim49.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@IdClass(DoctorPatient.DoctorPatientId.class)
public class DoctorPatient implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn
    public Doctor doctor;

    @Id
    @ManyToOne
    @JoinColumn
    public Patient patient;

    @Column(name = "rated")
    private Boolean rated;

    @Column(name = "stars")
    private int stars;

    public DoctorPatient(){
        this.rated = false;
        this.stars = 0;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Boolean isRated() {
        return rated;
    }

    public void setRated(Boolean rated) {
        this.rated = rated;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public static class DoctorPatientId implements Serializable {

        private Doctor doctor;
        private Patient patient;

        public DoctorPatientId() {
        }

        public DoctorPatientId(Doctor doctor, Patient patient) {
            this.doctor = doctor;
            this.patient = patient;
        }

        @Override
        public boolean equals(Object o) {

            if (o == this) {
                return true;
            }
            if (!(o instanceof DoctorPatient)) {
                return false;
            }
            DoctorPatient docPat = (DoctorPatient) o;
            return Objects.equals(doctor, docPat.getDoctor()) &&
                    Objects.equals(patient, docPat.getPatient());
        }

        @Override
        public int hashCode() {
            return Objects.hash(doctor, patient);
        }
    }
}
