package com.project.tim49.dto;

public class ChartDataDTO {

    private long name;
    private int value;

    public ChartDataDTO(long name, int value) {
        this.name = name;
        this.value = value;
    }

    public long getName() {
        return name;
    }

    public void setName(long name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
