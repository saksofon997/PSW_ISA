package com.project.tim49.service;

import com.project.tim49.dto.ClinicDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.model.Appointment;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.Doctor;
import com.project.tim49.model.Patient;
import com.project.tim49.repository.ClinicRepository;
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

    public boolean deleteClinic(Long id) {
        if (id != null) {
            Clinic forDelete = findOne(id);

            if(forDelete != null) {
                System.out.println("STIGAOooo");

                List<Appointment> clinicAppointments = forDelete.getAppointment();

                for (Patient p: forDelete.getPatients()){
                    System.out.println("STIGAO1");

                    ArrayList<Appointment> pendingApp = new ArrayList<Appointment>();
                    pendingApp.addAll(p.getPendingAppointments());
                    for (int i=0; i<pendingApp.size(); i++){
                        System.out.println("STIGAO2");

                        if (clinicAppointments.contains(pendingApp.get(i))){
                            System.out.println("STIGAO3");
                            p.getPendingAppointments().remove(pendingApp.get(i));
                        }
                    }
                }
                for (Doctor d: forDelete.getDoctors()) {
                    d.getAppointments().clear();
                }
                forDelete.getAppointment().clear();

                clinicRepository.deleteById(id);
                return true;
            }
            throw new ValidationException("Clinic does not exist!");
        }
        throw new ValidationException("Clinic ID has null value!");
    }
}
