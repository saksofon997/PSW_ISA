package com.project.tim49.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@IdClass(ClinicTypeOfExamination.ClinicTypeOfExaminationId.class)
public class ClinicTypeOfExamination implements Serializable{
    @Id
    @ManyToOne
    @JoinColumn
    public Clinic clinic;

    @Id
    @ManyToOne
    @JoinColumn
    public TypeOfExamination typeOfExamination;

    @Column(name = "price")
    private float price;

    public ClinicTypeOfExamination(){
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public TypeOfExamination getTypeOfExamination() {
        return typeOfExamination;
    }

    public void setTypeOfExamination(TypeOfExamination typeOfExamination) {
        this.typeOfExamination = typeOfExamination;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public static class ClinicTypeOfExaminationId implements Serializable {

        private Long clinic;
        private Long typeOfExamination;

        public ClinicTypeOfExaminationId() {
        }

        public ClinicTypeOfExaminationId(Long clinic, Long typeOfExamination) {
            this.clinic = clinic;
            this.typeOfExamination = typeOfExamination;
        }


        @Override
        public boolean equals(Object o) {

            if (o == this) {
                return true;
            }
            if (!(o instanceof ClinicTypeOfExamination)) {
                return false;
            }
            ClinicTypeOfExamination cliTyp = (ClinicTypeOfExamination) o;
            return Objects.equals(clinic, cliTyp.getClinic().getId()) &&
                    Objects.equals(typeOfExamination, cliTyp.getTypeOfExamination().getId());
        }

        @Override
        public int hashCode() {
            return Objects.hash(clinic, typeOfExamination);
        }
    }
}
