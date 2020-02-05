package com.project.tim49.service;

import com.project.tim49.dto.*;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.hibernate.StaleObjectStateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.EntityNotFoundException;
import javax.persistence.OptimisticLockException;
import javax.validation.ValidationException;
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

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
    @Autowired
    private ClinicTypeOfExaminationRepository clinicTypeOfExaminationRepository;
    @Autowired
    private DoctorService doctorService;

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
                List<Appointment> clinicAppointments = forDelete.getAppointments();
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
                forDelete.getAppointments().clear();
                clinicRepository.deleteById(id);
                return;
            }
            throw new ValidationException("Clinic does not exist!");
        }
        throw new ValidationException("Clinic ID has null value!");
    }

    // readOnly = false -- modifikujemo kliniku
    // propagation = requires_new -- za svaki poziv metode se pokrece nova transakcija
    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public void rateClinic(Long clinic_id, Long patient_id, int stars) {
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
        // Za testiranje konkurentnog pristupa
        // try { Thread.sleep(5000); } catch (InterruptedException e) { }
    }


    public List<ClinicsSearchResultDTO> getByQuery(String name, String address, long toe, long rating, long startTimestamp) {

        List<Clinic> clinics = clinicRepository.getByQuery(name, address);

        TypeOfExamination selectedToe = examinationRepository.findById(toe).orElse(null);

        if(selectedToe == null)
            throw new ValidationException("Selected type of examination does not exist");

        List<ClinicsSearchResultDTO> selected = new ArrayList<>();

        if(rating != -1) {
            Predicate<Clinic> byRating = clinic -> (clinic.getNumberOfStars()/clinic.getNumberOfReviews()) >= rating;

            clinics = clinics.stream().filter(byRating).collect(Collectors.toList());

            if(clinics.isEmpty())
                return selected;
        }

        for (Clinic clinic : clinics) {

            ClinicTypeOfExamination toeInClinic = clinicTypeOfExaminationRepository.getByClinicAndTypeOfExamination(clinic, selectedToe);
            if(toeInClinic == null) {
                continue;
            }

            List<Doctor> doctors = clinic.getDoctors();
            for(Doctor doc : doctors) {
                if(doc.getSpecialization() == null)
                    continue;

                if(doc.getSpecialization().getId().equals(selectedToe.getId())) {
                    List<String> getAvailableTimes = doctorService.getAvailableTimes(doc, startTimestamp, "patient");
                    if (!getAvailableTimes.isEmpty()) {
                        ClinicsSearchResultDTO sel = new ClinicsSearchResultDTO(clinic);
                        sel.setTypeOfExamination(new TypeOfExaminationDTO(toeInClinic));
                        selected.add(sel);
                        break;
                    }
                }
            }
        }

        return selected;
    }

    public float getClinicEarnings(long periodStart, long periodEnd, Long clinic_id){
        Float sum = appointmentRepository.getSumOfPricesInDesiredPeriod(periodStart, periodEnd, clinic_id);
        if (sum == null) {
            return 0;
        } else {
            return sum;
        }
    }

    public List<ChartDataDTO> getDayChartData(long periodStart, long periodEnd, Long clinic_id) {
        List<Appointment> appointments = getAndSortAppointments(periodStart, periodEnd, clinic_id);

        List<ChartDataDTO> returnVal = new ArrayList<>();
        for (int i = 0; i < 24; i++) {
            returnVal.add(new ChartDataDTO(periodStart + i * 60*60, 0));
        }

        for (Appointment appointment: appointments){
            for (int i = 0; i < returnVal.size() - 1; i++ ){
                ChartDataDTO day = returnVal.get(i);
                if (appointment.getEndingDateAndTime() >= day.getName()
                        && appointment.getEndingDateAndTime() <= returnVal.get(i+1).getName()){
                    returnVal.get(i).setValue(returnVal.get(i).getValue() + 1);
                    break;
                }
            }
        }
        return returnVal;
    }

    public List<ChartDataDTO> getWeekChartData(long periodStart, long periodEnd, Long clinic_id) {
        List<Appointment> appointments = getAndSortAppointments(periodStart, periodEnd, clinic_id);

        List<ChartDataDTO> returnVal = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            returnVal.add(new ChartDataDTO(periodStart + i * 24*60*60, 0));
        }

        for (Appointment appointment: appointments){
            for (int i = 0; i < returnVal.size() - 1; i++ ){
                ChartDataDTO day = returnVal.get(i);
                if (appointment.getEndingDateAndTime() >= day.getName()
                        && appointment.getEndingDateAndTime() <= returnVal.get(i+1).getName()){
                    returnVal.get(i).setValue(returnVal.get(i).getValue() + 1);
                    break;
                }
            }
        }
        return returnVal;
    }

    public List<ChartDataDTO> getMonthChartData(long periodStart, long periodEnd, Long clinic_id) {
        List<Appointment> appointments = getAndSortAppointments(periodStart, periodEnd, clinic_id);

        List<ChartDataDTO> returnVal = new ArrayList<>();
        Calendar calendar = GregorianCalendar.getInstance();
        calendar.setTime(new Date(periodEnd*1000));
        int monthNumOfDays = calendar.get(Calendar.DAY_OF_MONTH);
        for (int i = 0; i < monthNumOfDays; i++) {
            returnVal.add(new ChartDataDTO(periodStart + i * 24*60*60, 0));
        }

        for (Appointment appointment: appointments){
            for (int i = 0; i < returnVal.size() - 1; i++ ){
                ChartDataDTO day = returnVal.get(i);
                if (appointment.getEndingDateAndTime() >= day.getName()
                        && appointment.getEndingDateAndTime() <= returnVal.get(i+1).getName()){
                    returnVal.get(i).setValue(returnVal.get(i).getValue() + 1);
                    break;
                }
            }
        }
        return returnVal;
    }

    private List<Appointment> getAndSortAppointments(long periodStart, long periodEnd, Long clinic_id) {
        List<Appointment> appointments = appointmentRepository.getCompletedByClinicAndDesiredPeriod(periodStart, periodEnd, clinic_id);
        Comparator<Appointment> compareByEnd = Comparator.comparingLong(Appointment::getEndingDateAndTime);
        appointments.sort(compareByEnd);
        return appointments;
    }
}
