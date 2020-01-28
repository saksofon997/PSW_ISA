package com.project.tim49.service;

import com.project.tim49.dto.*;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.*;

@Service
public class ClinicService {

    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private ClinicPatientRepository clinicPatientRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private TypeOfExaminationRepository examinationRepository;

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

    public List<ClinicAdministratorDTO> getClinicAdmins(Long id) {
        Clinic clinic = findOne(id);

        if (clinic == null) {
            throw new NoSuchElementException();
        }

        List<ClinicAdministrator> admins = clinic.getClinicAdministrator();

        List<ClinicAdministratorDTO> adminsDTO = new ArrayList<>();
        for (ClinicAdministrator admin : admins) {
            adminsDTO.add(new ClinicAdministratorDTO(admin));
        }
        return adminsDTO;

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
        if (clinicPatient == null){
            throw new EntityNotFoundException("Database error");
        }
        if (clinicPatient.isRated()){
            clinic.setNumberOfStars(clinic.getNumberOfStars() - clinicPatient.getStars() + stars);
            clinicPatient.setStars(stars);
        } else {
            clinicPatient.setRated(true);
            clinicPatient.setStars(stars);
            clinic.setNumberOfStars(clinic.getNumberOfStars() + stars);
            clinic.setNumberOfReviews(clinic.getNumberOfReviews() + 1);
        }

        clinicRepository.save(clinic);
    }


    public List<ClinicsSearchResultDTO> getByQuery(String name, String address, long toe, long startTimestamp) {

        long endTimestamp = startTimestamp + 24 * 60 * 60;

        List<Clinic> clinics = clinicRepository.getByQuery(name, address);

        TypeOfExamination selectedToe = examinationRepository.findById(toe).orElse(null);

        if(selectedToe == null)
            throw new ValidationException("Selected type of examination does not exist");

        List<ClinicsSearchResultDTO> selected = new ArrayList<>();

        for (Clinic clinic : clinics) {
            List<Doctor> doctors = clinic.getDoctors();
            for(Doctor doc : doctors) {
                if(doc.getSpecialization() == null)
                    continue;

                if(doc.getSpecialization().getId().equals(selectedToe.getId())) {
                    List<Appointment> appts = appointmentRepository.getByTimesAndNotCompleted(startTimestamp, endTimestamp);

                    if(appts.isEmpty()) {
                        ClinicsSearchResultDTO sel = new ClinicsSearchResultDTO(clinic);
                        sel.setTypeOfExamination(new TypeOfExaminationDTO(selectedToe));
                        selected.add(sel);
                        return selected;
                    }

                    List<Appointment> apptsdocs = new ArrayList<>();
                    for(Appointment appt : appts) {
                        if(appt.doctors.contains(doc)) {
                            apptsdocs.add(appt);
                        }
                    }
                    if(apptsdocs.isEmpty()) {
                        ClinicsSearchResultDTO sel = new ClinicsSearchResultDTO(clinic);
                        sel.setTypeOfExamination(new TypeOfExaminationDTO(selectedToe));
                        selected.add(sel);
                        return selected;
                    }

                    Comparator<Appointment> compareByStart = Comparator.comparingLong(Appointment::getStartingDateAndTime);
                    apptsdocs.sort(compareByStart);

                    for(int i = 0; i < apptsdocs.size() - 1; i++){
                        if((apptsdocs.get(i).getEndingDateAndTime() - apptsdocs.get(i+1).getStartingDateAndTime()) >= 600) {
                            ClinicsSearchResultDTO sel = new ClinicsSearchResultDTO(clinic);
                            sel.setTypeOfExamination(new TypeOfExaminationDTO(selectedToe));
                            selected.add(sel);
                        }
                    }
                }
            }
        }

        return selected;
    }
}
