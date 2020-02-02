package com.project.tim49.dto;

import javafx.scene.chart.Chart;

import java.util.ArrayList;
import java.util.List;

public class ClinicBusinessDTO {

    private String name;
    private List<ChartDataDTO> series = new ArrayList<>();

    public ClinicBusinessDTO(String name, List<ChartDataDTO> series) {
        this.name = name;
        this.series = series;
    }

    public ClinicBusinessDTO() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ChartDataDTO> getSeries() {
        return series;
    }

    public void setSeries(List<ChartDataDTO> series) {
        this.series = series;
    }
}
