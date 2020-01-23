package com.project.tim49.service;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.dto.PatientDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AppointmentRequestService {

    @Autowired
    private AppointmentRequestRepository appointmentRequestRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private TypeOfExaminationRepository typeOfExaminationRepository;
    @Autowired
    private PatientRepository patientRepository;

    public ArrayList<AppointmentDTO> getClinicAppointmentRequests(Long clinic_id){
        Clinic clinic = clinicRepository.findById(clinic_id).orElseGet(null);
        if (clinic == null){
            throw new NoSuchElementException();
        }

        ArrayList<AppointmentRequest> appointmentRequests = appointmentRequestRepository.getByClinicAndApprovedFalse(clinic);
        ArrayList<AppointmentDTO> appointmentDTOs = new ArrayList<>();
        for (AppointmentRequest app: appointmentRequests){
            appointmentDTOs.add(new AppointmentDTO(app));
        }
        return appointmentDTOs;
    }

    public AppointmentDTO scheduleNewAppointment(AppointmentDTO appointmentDTO) {
        AppointmentRequest appointmentRequest = setAppointmentRequestData(appointmentDTO);

        AppointmentRequest saved = appointmentRequestRepository.save(appointmentRequest);

        return new AppointmentDTO(saved);
    }

    private AppointmentRequest setAppointmentRequestData(AppointmentDTO appointmentDTO){
        AppointmentRequest appointmentRequest = new AppointmentRequest();

        appointmentRequest.setApproved(false);
        appointmentRequest.setStartingDateAndTime(appointmentDTO.getStartingDateAndTime());
        appointmentRequest.setEndingDateAndTime(appointmentDTO.getStartingDateAndTime() + appointmentDTO.getDuration()/1000);
        appointmentRequest.setDuration(appointmentDTO.getDuration());
        appointmentRequest.setPrice(appointmentDTO.getPrice());

        TypeOfExamination type = typeOfExaminationRepository.findById(appointmentDTO.getTypeOfExamination().getId()).get();
        appointmentRequest.setTypeOfExamination(type);

        Clinic clinic = clinicRepository.findById(appointmentDTO.getClinic().getId()).get();
        appointmentRequest.setClinic(clinic);

        List<DoctorDTO> doctorDTOS = appointmentDTO.getDoctors();
        if (doctorDTOS.size() != 0){
            Doctor doc = doctorRepository.findById(doctorDTOS.get(0).getId()).get();
            appointmentRequest.setDoctor(doc);
        }

        PatientDTO patientDTO = appointmentDTO.getPatient();
        if (patientDTO != null){
            Patient patient = patientRepository.findById(patientDTO.getId()).get();
            appointmentRequest.setPatient(patient);
        }

        return appointmentRequest;
    }
}
