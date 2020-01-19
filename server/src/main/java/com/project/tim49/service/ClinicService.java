package com.project.tim49.service;

import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.ClinicPatientRepository;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

@Service
public class ClinicService {

    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private ClinicPatientRepository clinicPatientRepository;
    @Autowired
    private PatientRepository patientRepository;

    public ClinicDTO findOneDTO(Long id) {

        Clinic c = clinicRepository.findById(id).orElseGet(null);

        if(c != null) {
            ClinicDTO dto = new ClinicDTO(c);
            return dto;
        }
        else
            throw new ValidationException("Clinic does not exist!");
    }

    public Clinic findOne(Long id) {

        return clinicRepository.findById(id).orElseGet(null);
    }

    public List<DoctorDTO> getClinicDoctors(Long id){
        Clinic clinic = clinicRepository.findById(id).orElseGet(null);

        if (clinic == null){
            throw new NoSuchElementException();
        }

        List<Doctor> doctors = clinic.getDoctors();
        List<DoctorDTO> doctorDTOS = new ArrayList<>();

        for (Doctor doctor: doctors) {
            DoctorDTO doctorDTO = new DoctorDTO(doctor);
            doctorDTOS.add(doctorDTO);
        }

        return doctorDTOS;
    }

    public List<ClinicDTO> findAll() {
        List<ClinicDTO> clinicsDTO = new ArrayList<>();
        List<Clinic> clinics = clinicRepository.findAll();
        for (Clinic clinic : clinics) {
            clinicsDTO.add(new ClinicDTO(clinic));
        }
        return clinicsDTO;
    }

//    public Page<Clinic> findAll(Pageable page) {
//        return clinicRepository.findAll(page);
//    }

    public ClinicDTO save(ClinicDTO clinicDTO) {
        Clinic clinic = new Clinic();
        if(!clinicDTO.getName().equals("") || !clinicDTO.getAddress().equals("") || !clinicDTO.getCity().equals("")){
            clinic.setName(clinicDTO.getName());
            clinic.setAddress(clinicDTO.getAddress());
            clinic.setCity(clinicDTO.getCity());
            clinic.setState(clinicDTO.getState());
            clinic.setDescription(clinicDTO.getDescription());
            clinic.setNumberOfReviews(0);
            clinic.setNumberOfStars(0);
            clinicRepository.save(clinic);
        }else{
            throw new ValidationException("Clinic information not valid!");
        }
        return clinicDTO;
    }

    public Clinic getReference(Long id) {
        return clinicRepository.getOne(id);
    }

    public void changeClinicInfo(ClinicDTO clinicDTO) {
        Clinic forChange = getReference(clinicDTO.getId());
        try{
            forChange.setAddress(clinicDTO.getAddress());
            forChange.setCity(clinicDTO.getCity());
            forChange.setDescription(clinicDTO.getDescription());
            forChange.setName(clinicDTO.getName());
            forChange.setState(clinicDTO.getState());
            clinicRepository.save(forChange);
        }catch(EntityNotFoundException e){
            throw new ValidationException("Clinic does not exist!");
        }
    }

    public void deleteClinic(Long id) {
        if (id != null) {
            Clinic forDelete = findOne(id);
            if(forDelete != null) {
                List<Appointment> clinicAppointments = forDelete.getAppointment();
                for (ClinicPatient cp: forDelete.getPatients()){
                    ArrayList<Appointment> pendingApp = new ArrayList<Appointment>();
                    pendingApp.addAll(cp.getPatient().getPendingAppointments());
                    for (int i=0; i<pendingApp.size(); i++){
                        if (clinicAppointments.contains(pendingApp.get(i))){
                            throw new IllegalStateException("Clinic has pending appointments and can not be deleted!");
                        }
                    }
                }
                for (Doctor d: forDelete.getDoctors()) {
                    d.getAppointments().clear();
                }
                forDelete.getAppointment().clear();
                clinicRepository.deleteById(id);
                return;
            }
            throw new ValidationException("Clinic does not exist!");
        }
        throw new ValidationException("Clinic ID has null value!");
    }

    public void rateClinic(Long clinic_id, Long patient_id, int stars){
        if (clinic_id == null || patient_id == null || stars == 0 || stars < 0 || stars > 5){
            throw new ValidationException("Invalid parameters.");
        }
        Clinic clinic = clinicRepository.findById(clinic_id).orElse(null);
        if (clinic == null ) {
            throw new NoSuchElementException("Clinic does not exist.");
        }
        Patient patient = patientRepository.findById(patient_id).orElse(null);
        if (patient == null ) {
            throw new NoSuchElementException("Patient does not exist.");
        }
        boolean hadAppointmentsInClinic = false;
        for (Appointment appointment: patient.getFinishedAppointments()){
            if (appointment.getClinic().getId().equals(clinic_id)){
                hadAppointmentsInClinic = true;
                break;
            }
        }
        if (!hadAppointmentsInClinic){
            throw new ValidationException("You can only rate clinic in which you already had finished appointments!");
        }
        ClinicPatient clinicPatient = clinicPatientRepository.getByClinicAndPatient(clinic_id, patient_id);
        if (clinicPatient == null || clinicPatient.isRated()){
            throw new ValidationException("You can only rate clinic once!");
        }

        clinicPatient.setRated(true);
        //clinicPatientRepository.save(clinicPatient);
        clinic.setNumberOfStars(clinic.getNumberOfStars() + stars);
        clinic.setNumberOfReviews(clinic.getNumberOfReviews() + 1);
        clinicRepository.save(clinic);
    }
}
