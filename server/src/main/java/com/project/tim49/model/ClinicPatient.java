package com.project.tim49.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@IdClass(ClinicPatient.ClinicPatientId.class)
public class ClinicPatient implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn
    public Clinic clinic;

    @Id
    @ManyToOne
    @JoinColumn
    public Patient patient;

    @Column(name = "rated")
    private Boolean rated;

    @Column(name = "stars")
    private int stars;

    public ClinicPatient(){
        this.rated = false;
        this.stars = 0;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
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

    public static class ClinicPatientId implements Serializable {

        private Clinic clinic;
        private Patient patient;

        public ClinicPatientId() {
        }

        public ClinicPatientId(Clinic clinic, Patient patient) {
            this.clinic = clinic;
            this.patient = patient;
        }

        @Override
        public boolean equals(Object o) {

            if (o == this) {
                return true;
            }
            if (!(o instanceof ClinicPatient)) {
                return false;
            }
            ClinicPatient cliPat = (ClinicPatient) o;
            return Objects.equals(clinic, cliPat.getClinic()) &&
                    Objects.equals(patient, cliPat.getPatient());
        }

        @Override
        public int hashCode() {
            return Objects.hash(clinic, patient);
        }
    }
}
