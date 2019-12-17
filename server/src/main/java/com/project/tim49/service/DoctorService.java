package com.project.tim49.service;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.DoctorRepository;
import com.project.tim49.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import javax.validation.ValidationException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.*;

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
    @Autowired
    private PasswordEncoder passwordEncoder;

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
        doctor.setPassword(passwordEncoder.encode("123456"));
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

        Set<Appointment> appointments = doctor.get().getAppointments();
        for (Appointment appointment: appointments) {
            if (appointment.isDeleted()){
                continue;
            }
            if (!appointment.isCompleted()){
                return true;
            }
        }

        return false;
    }

    public boolean isAvailable(Long doctor_id, long startingTimeStamp, long duration){
        Optional<Doctor> doctor = doctorRepository.findById(doctor_id);
        if (!doctor.isPresent()){
            throw new ValidationException("No doctor with that ID!");
        }

        Set<Appointment> appointments = doctor.get().getAppointments();
        for (Appointment appointment: appointments) {
            if (appointment.isCompleted() || appointment.isDeleted()){
                continue;
            }
            if ( startingTimeStamp >= appointment.getStartingDateAndTime()
                    && startingTimeStamp + duration/1000 <= appointment.getEndingDateAndTime()){
                return false;
            }
            if (appointment.getStartingDateAndTime() >= startingTimeStamp
                    && appointment.getStartingDateAndTime() <= startingTimeStamp + duration/1000){
                return false;
            }
            if (appointment.getEndingDateAndTime() > startingTimeStamp
                    && appointment.getEndingDateAndTime() <= startingTimeStamp + duration/1000){
                return false;
            }
        }
        return true;
    }

    public boolean isDuringDoctorWorkingHours(Long doctor_id, long startingTimeStamp, long duration){
        Optional<Doctor> doctor = doctorRepository.findById(doctor_id);
        if (!doctor.isPresent()){
            throw new ValidationException("No doctor with that ID!");
        }
        Date startDateTime = new Date(startingTimeStamp * 1000);
        Date endDateTime = new Date(startingTimeStamp * 1000 + duration);
        SimpleDateFormat ft = new SimpleDateFormat("HH:mm:ss");

        int shiftStartHour;
        int shiftStartMinute;
        try {
            int[] shiftStart = getHoursAndMinutesFromString(doctor.get().getShiftStart());
            shiftStartHour = shiftStart[0];
            shiftStartMinute = shiftStart[1];
        } catch (NumberFormatException e){
            throw e;
        }

        int shiftEndHour;
        int shiftEndMinute;
        try {
            int[] shiftEnd = getHoursAndMinutesFromString(doctor.get().getShiftEnd());
            shiftEndHour = shiftEnd[0];
            shiftEndMinute = shiftEnd[1];
        } catch (NumberFormatException e){
            throw e;
        }

        int appointmentStartHour;
        int appointmentStartMinute;
        try {
            int[] appStart = getHoursAndMinutesFromString(ft.format(startDateTime));
            appointmentStartHour = appStart[0];
            appointmentStartMinute = appStart[1];
        } catch (NumberFormatException e){
            throw e;
        }

        int appointmentEndHour;
        int appointmentEndMinute;
        try {
            int[] appEnd = getHoursAndMinutesFromString(ft.format(endDateTime));
            appointmentEndHour = appEnd[0];
            appointmentEndMinute = appEnd[1];
        } catch (NumberFormatException e){
            throw e;
        }

        if (shiftStartHour < shiftEndHour){ // 09:00 - 17:00
            if (appointmentStartHour >= shiftStartHour && appointmentStartHour <= shiftEndHour
                        && appointmentEndHour >= shiftStartHour && appointmentEndHour <= shiftEndHour) {
                if (appointmentStartHour == shiftStartHour && appointmentStartMinute < shiftStartMinute){
                    return false;
                }
                if (appointmentEndHour == shiftEndHour && appointmentEndMinute > shiftEndMinute){
                    return false;
                }
                return true;
            } else {
                return false;
            }
        } else { // 21:00 - 05:00
            if (appointmentStartHour > shiftEndHour && appointmentStartHour < shiftStartHour
                    && appointmentEndHour > shiftEndHour && appointmentEndHour < shiftStartHour) {
                return false;
            } else {
                if (appointmentStartHour == shiftStartHour && appointmentStartMinute < shiftStartMinute){
                    return false;
                }
                if (appointmentEndHour == shiftEndHour && appointmentEndMinute > shiftEndMinute){
                    return false;
                }
                return true;
            }
        }
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

    public List<AppointmentDTO> getAppointments(Long id){
        Doctor doctor = doctorRepository.findById(id).orElse(null);
        Set<Appointment> appointments = new HashSet<>();
        List<AppointmentDTO> appointmentDTOS = new ArrayList<>();
        if (doctor!= null){
            appointments = doctor.getAppointments();
            for (Appointment a: appointments) {
                if (!a.isDeleted()){
                    appointmentDTOS.add(new AppointmentDTO(a));
                }
            }
        }else{
            throw new ValidationException("Doctor not found.");
        }
        return appointmentDTOS;
    }

    public AppointmentDTO getOneAppointment(Long id, Long appID){
        Doctor doctor = doctorRepository.findById(id).orElse(null);
        Set<Appointment> appointments = new HashSet<>();
        AppointmentDTO appointmentDTO = null;
        if (doctor== null){
            throw new ValidationException("Doctor not found.");
        }else{
            appointments = doctor.getAppointments();
            for (Appointment a: appointments) {
                if (a.getId().equals(appID)){
                    appointmentDTO = new AppointmentDTO(a);
                }
            }
        }
        return appointmentDTO;
    }

    public DoctorDTO getDoctor(Long id){
        Doctor doctor = doctorRepository.findById(id).orElse(null);
        if (doctor != null){
            return new DoctorDTO(doctor);
        }
        throw new NoSuchElementException("Doctor with given id not found.");
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

        if (startHour == endHour){
            if (startMinute >= endMinute){
                return false;
            }
        }
        return true;
    }

    public int[] getHoursAndMinutesFromString(String timeAndMinutes){
        String[] split = timeAndMinutes.split(":");
        int hour;
        int minute;
        try {
            hour = Integer.parseInt(split[0]);
            minute = Integer.parseInt(split[1]);
        } catch (NumberFormatException e){
            throw e;
        }
        int[] retVal = {hour, minute};
        return retVal;
    }
}
