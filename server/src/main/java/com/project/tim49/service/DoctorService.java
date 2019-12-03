package com.project.tim49.service;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.DoctorRepository;
import com.project.tim49.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private LoginRepository userRepository;
    @Autowired
    private AuthorityService authorityService;

    public List<DoctorDTO> getDoctors(Long id){
        if (id == null) {
            throw new ValidationException("Invalid clinic ID!");
        }
        Clinic clinic = clinicRepository.getOne(id);
        if (clinic== null){
            throw new ValidationException("Clinic does not exist!");
        }
        List<Doctor> doctors = clinic.getDoctors();
        List<DoctorDTO> doctorDTOS = new ArrayList<>();

        for (Doctor doctor: doctors) {
            DoctorDTO doctorDTO = new DoctorDTO(doctor);
            doctorDTOS.add(doctorDTO);
        }

        return doctorDTOS;
    }

    public void createNewDoctor(DoctorDTO doctorDTO){
        if (doctorDTO.getClinic_id() == null){
            throw new ValidationException("Invalid clinic ID!");
        }

        Optional<Clinic> clinic = clinicRepository.findById(doctorDTO.getClinic_id());
        if (!clinic.isPresent()){
            throw new ValidationException("No clinic with that ID!");
        }

        User user = userRepository.findOneByEmail(doctorDTO.getEmail());
        if (user != null){
            throw new ValidationException("User with this email already exists!");
        }

        Doctor doctor = docDTOtoReal(doctorDTO);
        doctor.setClinic(clinic.get());
        doctor.setAuthorities( authorityService.findByname("DOCTOR") );
        doctor.setPassword("TEMPPASS");
        doctor.setPasswordChanged(false);

        doctorRepository.save(doctor);
    }

    public DoctorDTO changeDoctorData(DoctorDTO dto){
        Doctor doctor = getReference(dto.getId());
        try {
            doctor.setName(dto.getName());
        } catch (Exception e){
            throw new NoSuchElementException();
        }
        doctor.setName(dto.getName());
        doctor.setSurname(dto.getSurname());
        doctor.setAddress(dto.getAddress());
        doctor.setCity(dto.getCity());
        doctor.setState(dto.getState());
        doctor.setPhoneNumber(dto.getPhoneNumber());
        doctor.setUpin(dto.getUpin());

        doctorRepository.save(doctor);

        return new DoctorDTO(doctor);
    }

    public Doctor getReference(Long id){
        return doctorRepository.getOne(id);
    }

    public List<DoctorDTO> getByQuery(String name, String surname, Long clinic_id) {
        List<Doctor> doctors = doctorRepository.getByQuery(name, surname, clinic_id);
        List<DoctorDTO> doctorDTOS = new ArrayList<>();
        for(Doctor d: doctors) {
            DoctorDTO doctorDTO = new DoctorDTO(d);
            doctorDTOS.add(doctorDTO);
        }
        return doctorDTOS;
    }

    public boolean hasActiveAppointments(Long id){
        if (id == null) {
            throw new ValidationException("Invalid doctor ID!");
        }

        Optional<Doctor> doctor = doctorRepository.findById(id);
        if (!doctor.isPresent()){
            throw new ValidationException("No doctor with that ID!");
        }

        List<Appointment> appointments = doctor.get().getAppointments();
        for (Appointment appointment: appointments) {
            if (!appointment.isCompleted()){
                return true;
            }
        }

        return false;
    }

    public void deleteDoctor(Long id){
        Optional<Doctor> doctor = doctorRepository.findById(id);
        if (!doctor.isPresent()){
            throw new ValidationException("No doctor with that ID!");
        }

        doctorRepository.delete(doctor.get());
    }

    public Doctor docDTOtoReal(DoctorDTO dto){
        Doctor real = new Doctor();
        real.setEmail(dto.getEmail());
        real.setName(dto.getName());
        real.setSurname(dto.getSurname());
        real.setAddress(dto.getAddress());
        real.setCity(dto.getCity());
        real.setState(dto.getState());
        real.setPhoneNumber(dto.getPhoneNumber());
        real.setUpin(dto.getUpin());
        real.setShiftStart(dto.getShiftStart());
        real.setShiftEnd(dto.getShiftEnd());
        real.setNumberOfStars(dto.getNumberOfStars());
        real.setNumberOfReviews(dto.getNumberOfReviews());
        return real;
    }

    public boolean shiftValid(String shiftStart, String shiftEnd){
        if (shiftStart == null || shiftStart.equals("")){
            return false;
        }
        String[] start = shiftStart.split(":");
        int startHour;
        int startMinute;
        if (start.length != 2 || start[0].length() > 2 || start[1].length() > 2){
            return false;
        }
        try {
            startHour = Integer.parseInt(start[0]);
            startMinute = Integer.parseInt(start[1]);
        } catch (NumberFormatException e){
            return false;
        }

        if (shiftEnd == null || shiftEnd.equals("")){
            return false;
        }
        String[] end = shiftEnd.split(":");
        int endHour;
        int endMinute;
        if (end.length != 2 || end[0].length() > 2 || end[1].length() > 2){
            return false;
        }
        try {
            endHour = Integer.parseInt(end[0]);
            endMinute = Integer.parseInt(end[1]);
        } catch (NumberFormatException e){
            return false;
        }

        if (startHour > endHour){
            return false;
        } else {
            if (startHour == endHour){
                if (startMinute >= endMinute){
                    return false;
                }
            }
        }


        return true;
    }
    public List<AppointmentDTO> getAppointments(Long id){
        Doctor doctor = doctorRepository.findById(id).orElse(null);
        List<Appointment> appointments = new ArrayList<>();
        List<AppointmentDTO> appointmentDTOS = new ArrayList<>();
        if (doctor!= null){
            appointments = doctor.getAppointments();
            for (Appointment a: appointments) {
                appointmentDTOS.add(new AppointmentDTO(a));
            }
        }else{
            throw new ValidationException("Doctor not found.");
        }
        return appointmentDTOS;
    }
}
