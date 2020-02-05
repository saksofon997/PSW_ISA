package com.project.tim49.service;

import com.project.tim49.dto.AppointmentDTO;
import com.project.tim49.dto.ClinicAdministratorDTO;
import com.project.tim49.dto.DoctorAvailabilityDTO;
import com.project.tim49.dto.DoctorDTO;
import com.project.tim49.model.*;
import com.project.tim49.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import javax.print.Doc;
import javax.validation.ValidationException;
import java.lang.reflect.Type;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private DoctorPatientRepository doctorPatientRepository;
    @Autowired
    private TypeOfExaminationRepository typeOfExaminationRepository;
    @Autowired
    private LoginRepository userRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private AppointmentRequestRepository appointmentRequestRepository;
    @Autowired
    private AuthorityService authorityService;
    @Lazy
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

        Optional<TypeOfExamination> specialization = Optional.empty();
        if (doctorDTO.getSpecialization() != null){
            specialization = typeOfExaminationRepository.findById(doctorDTO.getSpecialization().getId());
            if (!specialization.isPresent()){
                throw new ValidationException("No type of examination with that ID!");
            }
        }

        User user = userRepository.findOneByEmail(doctorDTO.getEmail());
        if (user != null){
            throw new ValidationException("User with this email already exists!");
        }

        Doctor doctor = docDTOtoReal(doctorDTO);
        doctor.setClinic(clinic.get());
        specialization.ifPresent(doctor::setSpecialization);
        doctor.setAuthorities( authorityService.findByname("DOCTOR") );
        doctor.setPassword(passwordEncoder.encode("123456"));
        doctor.setPasswordChanged(false);
        doctor.setEnabled(true);

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

    public boolean isAvailable(Long doctor_id, Doctor doctor, long startingTimeStamp, long duration){
        if (doctor == null){
            Optional<Doctor> check = doctorRepository.findById(doctor_id);
            if (!check.isPresent()){
                throw new ValidationException("No doctor with that ID!");
            }
            doctor = check.get();
        }
        Set<Vacation> vacations = doctor.getVacations();
        for (Vacation vacation: vacations) {
            if ( startingTimeStamp >= vacation.getStartDate()
                    && startingTimeStamp + duration/1000 <= vacation.getEndDate()){
                return false;
            }
            if (vacation.getStartDate() >= startingTimeStamp
                    && vacation.getEndDate() <= startingTimeStamp + duration/1000){
                return false;
            }
            if (vacation.getEndDate() > startingTimeStamp
                    && vacation.getEndDate() <= startingTimeStamp + duration/1000){
                return false;
            }
        }

        Set<Appointment> appointments = doctor.getAppointments();
        for (Appointment appointment: appointments) {
            if (appointment.isCompleted() || appointment.isDeleted()){
                continue;
            }
            if ( startingTimeStamp >= appointment.getStartingDateAndTime()
                    && startingTimeStamp + duration/1000 < appointment.getEndingDateAndTime()){
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

    public boolean isDuringDoctorWorkingHours(Long doctor_id, Doctor doctor, long startingTimeStamp, long duration){
        if (doctor == null){
            Optional<Doctor> check = doctorRepository.findById(doctor_id);
            if (!check.isPresent()){
                throw new ValidationException("No doctor with that ID!");
            }
            doctor = check.get();
        }
        Date startDateTime = new Date(startingTimeStamp * 1000);
        Date endDateTime = new Date(startingTimeStamp * 1000 + duration);
        SimpleDateFormat ft = new SimpleDateFormat("HH:mm:ss");

        int shiftStartHour;
        int shiftStartMinute;
        try {
            int[] shiftStart = getHoursAndMinutesFromString(doctor.getShiftStart());
            shiftStartHour = shiftStart[0];
            shiftStartMinute = shiftStart[1];
        } catch (NumberFormatException e){
            throw e;
        }

        int shiftEndHour;
        int shiftEndMinute;
        try {
            int[] shiftEnd = getHoursAndMinutesFromString(doctor.getShiftEnd());
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

    public boolean canViewPatientMedicalRecord(Long patient_id, Long doctor_id){
        Patient patient = patientRepository.findById(patient_id).orElse(null);
        if (patient == null){
            throw new NoSuchElementException("Patient with given id not found.");
        }

        for (Appointment appointment: patient.getFinishedAppointments()){
            for (Doctor doctor: appointment.getDoctors()){
                if (doctor.getId().equals(doctor_id)){
                    return true;
                }
            }
        }
        return false;
    }

    public void rateDoctor(Long doctor_id, Long patient_id, int stars){
        if (doctor_id == null || patient_id == null || stars == 0 || stars < 0 || stars > 5){
            throw new ValidationException("Invalid parameters.");
        }
        Doctor doctor = doctorRepository.findById(doctor_id).orElse(null);
        if (doctor == null ) {
            throw new NoSuchElementException("Doctor does not exist.");
        }
        Patient patient = patientRepository.findById(patient_id).orElse(null);
        if (patient == null ) {
            throw new NoSuchElementException("Patient does not exist.");
        }
        boolean hadAppointmentsWithDoctor = false;
        for (Appointment appointment: patient.getFinishedAppointments()){
            for (Doctor doc: appointment.getDoctors()){
                if (doc.getId().equals(doctor_id)){
                    hadAppointmentsWithDoctor = true;
                    break;
                }
            }
        }
        if (!hadAppointmentsWithDoctor){
            throw new ValidationException("You can only rate doctor you had appointments with!");
        }
        DoctorPatient doctorPatient = doctorPatientRepository.getByDoctorAndPatient(doctor_id, patient_id);
        if (doctorPatient == null){
            throw new EntityNotFoundException("Database error");
        }
        if (doctorPatient.isRated()){
            doctor.setNumberOfStars(doctor.getNumberOfStars() - doctorPatient.getStars() + stars);
            doctorPatient.setStars(stars);
        } else {
            doctorPatient.setRated(true);
            doctorPatient.setStars(stars);
            doctor.setNumberOfStars(doctor.getNumberOfStars() + stars);
            doctor.setNumberOfReviews(doctor.getNumberOfReviews() + 1);
        }

        doctorRepository.save(doctor);
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

    public List<DoctorDTO> returnListDTO(List<Doctor> doctors) {
        List<DoctorDTO> doctorDTOS = new ArrayList<>();
        for(Doctor d: doctors) {
            DoctorDTO doctorDTO = new DoctorDTO(d);
            doctorDTOS.add(doctorDTO);
        }
        return doctorDTOS;
    }

    public List<DoctorDTO> getByAdvancedQuery(String name, String surname, Long clinic_id, long rating, Long toe, long date) {
        List<Doctor> doctors = doctorRepository.getByQuery(name, surname, clinic_id);

        if(doctors.isEmpty())
            return returnListDTO(doctors);

        List<Doctor> selected = new ArrayList<>();
        selected = doctors;

        if(rating != -1) {
            Predicate<Doctor> byRating = doctor -> (doctor.getNumberOfStars()/doctor.getNumberOfReviews()) >= rating;

            selected = selected.stream().filter(byRating).collect(Collectors.toList());
            if(selected.isEmpty())
                return returnListDTO(selected);
        }
        if(toe != -1) {
            Predicate<Doctor> byToe = doctor -> doctor.getSpecialization().getId().equals(toe);

            selected = selected.stream().filter(byToe).collect(Collectors.toList());
            if(selected.isEmpty()) {
                return returnListDTO(selected);
            }
        }
        if(date != -1) {
            //if hes available for at least 10 minutes that day, times wont be empty, so he stays in the list
            Iterator<Doctor> iter = selected.iterator();
            while(iter.hasNext()) {
                Doctor doc = iter.next();
                List<String> times = getAvailableTimes(doc, date, "patient");
                if(times.isEmpty()){
                    iter.remove();
                }
            }
        }
        return returnListDTO(selected);
    }

    public DoctorAvailabilityDTO getAvailability(Long doctor_id, long date, String role) {
        Doctor doctor = doctorRepository.findById(doctor_id).orElse(null);
        if (doctor == null){
            throw new NoSuchElementException("Doctor with given id not found.");
        }

        List<String> times = getAvailableTimes(doctor, date, role);

        DoctorAvailabilityDTO doctorAvailabilityDTO = new DoctorAvailabilityDTO(doctor_id, true, times);

        if(times.isEmpty())
            doctorAvailabilityDTO.setAvailable(false);

        return doctorAvailabilityDTO;
    }

    //Returns list of timestamps with doctors availability during 24h
    public List<String> getAvailableTimes(Doctor doctor, long startingTimeStamp, String role){
        long duration = 600;
        long endingTimeStamp = startingTimeStamp + 24*60*60;

        //all appointments that day
        List<Appointment> appointments = appointmentRepository.getByTimesAndNotCompleted(startingTimeStamp, endingTimeStamp);

        if (role.equals("patient")){
            List<AppointmentRequest> requests = appointmentRequestRepository.getByTimesAndDoctor(startingTimeStamp, endingTimeStamp, doctor.getId());
            for (AppointmentRequest request: requests) {
                Appointment tempApp = new Appointment();
                tempApp.setStartingDateAndTime(request.getStartingDateAndTime());
                tempApp.setEndingDateAndTime(request.getEndingDateAndTime());
                Set<Doctor> docs = new HashSet<>();
                docs.add(request.getDoctor());
                tempApp.setDoctors(docs);
                appointments.add(tempApp);
            }
        }

        Predicate<Appointment> byDoc = appt -> appt.getDoctors().contains(doctor);

        //all appointments that day with our doctor
        appointments = appointments.stream().filter(byDoc).collect(Collectors.toList());

        //all appointments that day with our doctor sorted by starting time
        Comparator<Appointment> compareByStart = Comparator.comparingLong(Appointment::getStartingDateAndTime);
        appointments.sort(compareByStart);

        List<String> times = new ArrayList<>();

        for(long iter = startingTimeStamp; iter < endingTimeStamp; iter+=duration) {
            //thanks mihajlo
            if(isAvailableVer(appointments, iter, doctor) && isDuringDoctorWorkingHoursVer(doctor, iter)) {
                times.add(String.valueOf(iter));
            }
        }

        return times;
    }

    public boolean isAvailableVer(List<Appointment> appointments, long startingTimeStamp, Doctor doctor){
        Set<Vacation> vacations = doctor.getVacations();
        for (Vacation vacation: vacations) {
            if ( startingTimeStamp >= vacation.getStartDate()
                    && startingTimeStamp + 600 <= vacation.getEndDate()){
                return false;
            }
            if (vacation.getStartDate() >= startingTimeStamp
                    && vacation.getEndDate() <= startingTimeStamp + 600){
                return false;
            }
            if (vacation.getEndDate() > startingTimeStamp
                    && vacation.getEndDate() <= startingTimeStamp + 600){
                return false;
            }
        }
        for (Appointment appointment: appointments) {
            if (appointment.isCompleted() || appointment.isDeleted()){
                continue;
            }
            if ( startingTimeStamp >= appointment.getStartingDateAndTime()
                    && startingTimeStamp + 600 < appointment.getEndingDateAndTime()){
                return false;
            }
            if (appointment.getStartingDateAndTime() >= startingTimeStamp
                    && appointment.getStartingDateAndTime() <= startingTimeStamp + 600){
                return false;
            }
            if (appointment.getEndingDateAndTime() > startingTimeStamp
                    && appointment.getEndingDateAndTime() <= startingTimeStamp + 600){
                return false;
            }
        }
        return true;
    }

    public boolean isDuringDoctorWorkingHoursVer(Doctor doctor, long startingTimeStamp){

        Date startDateTime = new Date(startingTimeStamp * 1000);
        Date endDateTime = new Date((startingTimeStamp+600) * 1000);

        Calendar calendar = GregorianCalendar.getInstance();

        int shiftStartHour;
        int shiftStartMinute;
        try {
            int[] shiftStart = getHoursAndMinutesFromString(doctor.getShiftStart());
            shiftStartHour = shiftStart[0];
            shiftStartMinute = shiftStart[1];
            //System.out.println("Doctors shift start: " + shiftStartHour + ":" + shiftStartMinute);
        } catch (NumberFormatException e){
            throw e;
        }

        int shiftEndHour;
        int shiftEndMinute;
        try {
            int[] shiftEnd = getHoursAndMinutesFromString(doctor.getShiftEnd());
            shiftEndHour = shiftEnd[0];
            shiftEndMinute = shiftEnd[1];
            //System.out.println("Doctors shift end: " + shiftEndHour + ":" + shiftEndMinute);
        } catch (NumberFormatException e){
            throw e;
        }

        int appointmentStartHour;
        int appointmentStartMinute;
        try {
            calendar.setTime(startDateTime);
            appointmentStartHour = calendar.get(Calendar.HOUR_OF_DAY);
            appointmentStartMinute = calendar.get(Calendar.MINUTE);
            //System.out.println("Appointment start: " + appointmentStartHour + ":" + appointmentStartMinute);
        } catch (NumberFormatException e){
            throw e;
        }

        int appointmentEndHour;
        int appointmentEndMinute;
        try {
            calendar.setTime(endDateTime);
            appointmentEndHour = calendar.get(Calendar.HOUR_OF_DAY);
            appointmentEndMinute = calendar.get(Calendar.MINUTE);
            //System.out.println("Appointment end: " + appointmentEndHour + ":" + appointmentEndMinute);
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
}
