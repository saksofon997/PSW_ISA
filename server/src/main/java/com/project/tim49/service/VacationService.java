package com.project.tim49.service;

import com.project.tim49.dto.UserDTO;
import com.project.tim49.dto.VacationDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.*;

@Service
public class VacationService {

    @Autowired
    VacationRepository vacationRepository;
    @Autowired
    DoctorRepository doctorRepository;
    @Autowired
    NurseRepository nurseRepository;
    @Autowired
    ClinicRepository clinicRepository;

    public UserDTO approveVacationRequest(Long vacation_id) {
        if(vacation_id == null)
            throw new ValidationException("Invalid vacation ID!");

        Vacation vacation = vacationRepository.getOne(vacation_id);

        if(vacation == null)
            throw new ValidationException("No vacation with that ID!");

        Optional<Doctor> doctor = doctorRepository.findById(vacation.getMedicalStaff().getId());
        Optional<Nurse> nurse = nurseRepository.findById(vacation.getMedicalStaff().getId());

        if(!doctor.isPresent() && !nurse.isPresent()) {
            throw new NoSuchElementException("No staff with that ID!");
        }

        UserDTO userDTO;
        userDTO = doctor.map(UserDTO::new).orElseGet(() -> new UserDTO(nurse.get()));

        vacation.setApproved(true);
        vacationRepository.save(vacation);

        return userDTO;
    }

    public UserDTO denyVacationRequest(Long vacation_id) {
        if(vacation_id == null)
            throw new ValidationException("Invalid vacation ID!");

        Vacation vacation = vacationRepository.getOne(vacation_id);

        if(vacation == null)
            throw new ValidationException("No vacation with that ID!");

        Optional<Doctor> doctor = doctorRepository.findById(vacation.getMedicalStaff().getId());
        Optional<Nurse> nurse = nurseRepository.findById(vacation.getMedicalStaff().getId());

        if(!doctor.isPresent() && !nurse.isPresent()) {
            throw new NoSuchElementException("No staff with that ID!");
        }

        UserDTO userDTO;

        if(doctor.isPresent())
            userDTO = new UserDTO(doctor.get());
        else
            userDTO = new UserDTO(nurse.get());

        vacationRepository.deleteById(vacation_id);

        return userDTO;

    }

    public VacationDTO createVacationRequest(VacationDTO vacationDTO) {
        if(vacationDTO.getStaffId() == null)
            throw new ValidationException("Invalid staff ID!");

        Optional<Doctor> doctor = doctorRepository.findById(vacationDTO.getStaffId());
        Optional<Nurse> nurse = nurseRepository.findById(vacationDTO.getStaffId());

        if(!doctor.isPresent() && !nurse.isPresent()) {
            throw new NoSuchElementException("No staff with that ID!");
        }

        if(doctor.isPresent()) {
            if (checkValidPeriodD(doctor.get(), vacationDTO)) {
                Vacation vac = new Vacation();
                vac.setStartDate(vacationDTO.getStartDate());
                vac.setEndDate(vacationDTO.getEndDate());
                vac.setMedicalStaff(doctor.get());
                vac.setApproved(false);
                vacationRepository.save(vac);
                return vacationDTO;
            }
            throw new ValidationException("You have appointments or vacations during that time!");
        }
        else {
            if (checkValidPeriodN(nurse.get(), vacationDTO)) {
                Vacation vac = new Vacation();
                vac.setStartDate(vacationDTO.getStartDate());
                vac.setEndDate(vacationDTO.getEndDate());
                vac.setMedicalStaff(nurse.get());
                vac.setApproved(false);
                vacationRepository.save(vac);
                return vacationDTO;
            }
            throw new ValidationException("You have appointments or vacations during that time!");
        }
    }

    private boolean checkValidPeriodD(Doctor doctor, VacationDTO vacationDTO) {
        if(doctor == null || vacationDTO == null)
            throw new ValidationException("Parameters are null");

        Set<Appointment> appointments = doctor.getAppointments();
        for(Appointment app: appointments) {
            if (app.getStartingDateAndTime() > vacationDTO.getStartDate() && app.getStartingDateAndTime() < vacationDTO.getEndDate()) {
                //throw new ValidationException("You have appointments during that time!"); //pocetak upada u odmor
                return false;
            }
            if (app.getEndingDateAndTime() > vacationDTO.getStartDate() && app.getEndingDateAndTime() < vacationDTO.getEndDate()) {
                //throw new ValidationException("You have appointments during that time!"); //kraj upada u odmor
                return false;
            }
            if (app.getStartingDateAndTime() < vacationDTO.getStartDate() && app.getEndingDateAndTime() > vacationDTO.getEndDate()) {
                //throw new ValidationException("You have appointments during that time!"); //odmor je izmedju pocetka
                // i kraja sastanka
                return false;
            }
        }

        List<Vacation> vacations = doctor.getVacations();
        for(Vacation vac: vacations) {
            if (vac.getStartDate() > vacationDTO.getStartDate() && vac.getStartDate() < vacationDTO.getEndDate()) {
                //throw new ValidationException("You already have vacations during that time!"); //pocetak upada u odmor
                return false;
            }
            if (vac.getEndDate() > vacationDTO.getStartDate() && vac.getEndDate() < vacationDTO.getEndDate()) {
                //throw new ValidationException("You already have vacations during that time!"); //kraj upada u odmor
                return false;
            }
            if (vac.getStartDate() < vacationDTO.getStartDate() && vac.getEndDate() > vacationDTO.getEndDate()) {
                //throw new ValidationException("You already have vacations during that time!"); //odmor je izmedju
                // pocetka i kraja drugog odmora
                return false;
            }
        }
        return true;
    }

    private boolean checkValidPeriodN(Nurse nurse, VacationDTO vacationDTO) {
        if(nurse == null || vacationDTO == null)
            throw new ValidationException("Parameters are null");

        List<Vacation> vacations = nurse.getVacations();
        for(Vacation vac: vacations) {
            if (vac.getStartDate() > vacationDTO.getStartDate() && vac.getStartDate() < vacationDTO.getEndDate()) {
                //throw new ValidationException("You already have vacations during that time!"); //pocetak upada u odmor
                return false;
            }
            if (vac.getEndDate() > vacationDTO.getStartDate() && vac.getEndDate() < vacationDTO.getEndDate()) {
                //throw new ValidationException("You already have vacations during that time!"); //kraj upada u odmor
                return false;
            }
            if (vac.getStartDate() < vacationDTO.getStartDate() && vac.getEndDate() > vacationDTO.getEndDate()) {
                //throw new ValidationException("You already have vacations during that time!"); //odmor je izmedju
                // pocetka i kraja drugog odmora
                return false;
            }
        }
        return true;
    }

    public List<VacationDTO> findAll(Long clinic_id) {
        if(clinic_id == null)
            throw new ValidationException("clinic_id is null");

        List<VacationDTO> vacationList = new ArrayList<VacationDTO>();

        Optional<Clinic> clinic = clinicRepository.findById(clinic_id);

        List<Doctor> doctors = clinic.get().getDoctors();
        for(Doctor doc : doctors)
            doc.getVacations().forEach(n -> { if(!n.isApproved()) vacationList.add(new VacationDTO(n)); });

        List<Nurse> nurses = clinic.get().getNurses();
        for(Nurse nurse : nurses)
            nurse.getVacations().forEach(n -> { if(!n.isApproved()) vacationList.add(new VacationDTO(n)); });

        return vacationList;

    }

    public List<VacationDTO> getVacationsStaff(Long staff_id) {
        if(staff_id == null)
            throw new ValidationException("Invalid staff ID!");

        Optional<Doctor> doctor = doctorRepository.findById(staff_id);
        Optional<Nurse> nurse = nurseRepository.findById(staff_id);

        if(!doctor.isPresent() && !nurse.isPresent()) {
            throw new NoSuchElementException("No staff with that ID!");
        }

        List<VacationDTO> vacationList = new ArrayList<VacationDTO>();

        if(doctor.isPresent()) {
            doctor.get().getVacations().forEach(n -> { if(n.isApproved()) vacationList.add(new VacationDTO(n)); });
            return vacationList;
        } else {
            nurse.get().getVacations().forEach(n -> { if(n.isApproved()) vacationList.add(new VacationDTO(n)); });
            return vacationList;
        }
    }
}
