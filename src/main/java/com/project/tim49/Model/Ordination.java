package com.project.tim49.Model; /***********************************************************************
 * Module:  Ordination.java
 * Author:  TIM 49
 * Purpose: Defines the Class Ordination
 ***********************************************************************/

import javax.persistence.*;

@Entity
public class Ordination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "labelNum", nullable = false)
    private String labelNum;

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

    public String getLabelNum() {
        return labelNum;
    }

    public void setLabelNum(String labelNum) {
        this.labelNum = labelNum;
    }
}