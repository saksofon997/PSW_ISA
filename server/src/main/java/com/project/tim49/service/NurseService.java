package com.project.tim49.service;

import com.project.tim49.dto.NurseDTO;
import com.project.tim49.dto.UserDTO;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.Nurse;
import com.project.tim49.model.User;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.LoginRepository;
import com.project.tim49.repository.NurseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class NurseService {

    @Autowired
    private NurseRepository nurseRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private LoginRepository userRepository;
    @Autowired
    private AuthorityService authorityService;

    public List<NurseDTO> getNurses(Long clinic_id){
        if (clinic_id == null) {
            throw new ValidationException("Invalid clinic ID!");
        }
        Clinic clinic = clinicRepository.getOne(clinic_id);
        if (clinic== null){
            throw new ValidationException("Clinic does not exist!");
        }
        List<Nurse> nurses = clinic.getNurses();
        List<NurseDTO> nurseDTOS = new ArrayList<>();

        for (Nurse nurse: nurses) {
            NurseDTO nurseDTO = new NurseDTO(nurse);
            nurseDTOS.add(nurseDTO);
        }

        return nurseDTOS;
    }

    public void createNewNurse(NurseDTO nurseDTO){
        if (nurseDTO.getClinic_id() == null){
            throw new ValidationException("Invalid clinic ID!");
        }

        Optional<Clinic> clinic = clinicRepository.findById(nurseDTO.getClinic_id());
        if (!clinic.isPresent()){
            throw new ValidationException("No clinic with that ID!");
        }

        User user = userRepository.findOneByEmail(nurseDTO.getEmail());
        if (user != null){
            throw new ValidationException("User with this email already exists!");
        }

        Nurse nurse = nurseDTOtoReal(nurseDTO);
        nurse.setClinic(clinic.get());
        nurse.setAuthorities( authorityService.findByname("NURSE") );
        nurse.setPassword("TEMPPASS");
        nurse.setPasswordChanged(false);

        nurseRepository.save(nurse);
    }

    public NurseDTO changeNurseData(NurseDTO dto){
        Nurse nurse = getReference(dto.getId());
        try {
            nurse.setName(dto.getName());
        } catch (Exception e){
            throw new NoSuchElementException();
        }
        nurse.setName(dto.getName());
        nurse.setSurname(dto.getSurname());
        nurse.setAddress(dto.getAddress());
        nurse.setCity(dto.getCity());
        nurse.setState(dto.getState());
        nurse.setPhoneNumber(dto.getPhoneNumber());
        nurse.setUpin(dto.getUpin());

        nurseRepository.save(nurse);

        return new NurseDTO(nurse);
    }


    public Nurse getReference(Long id){
        return nurseRepository.getOne(id);
    }

    public List<NurseDTO> getByQuery(String name, String surname, Long clinic_id) {
        List<Nurse> nurses = nurseRepository.getByQuery(name, surname, clinic_id);
        List<NurseDTO> nurseDTOS = new ArrayList<>();
        for(Nurse d: nurses) {
            NurseDTO nurseDTO = new NurseDTO(d);
            nurseDTOS.add(nurseDTO);
        }
        return nurseDTOS;
    }

    public void deleteNurse(Long id){
        Optional<Nurse> nurse = nurseRepository.findById(id);
        if (!nurse.isPresent()){
            throw new ValidationException("No nurse with that ID!");
        }

        nurseRepository.delete(nurse.get());
    }

    public Nurse nurseDTOtoReal(NurseDTO dto){
        Nurse real = new Nurse();
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

    public NurseDTO findById(Long id) {

        Nurse nurse = nurseRepository.findById(id).orElse(null);
        NurseDTO nurseDTO = null;
        if(nurse != null){
            nurseDTO = new NurseDTO(nurse);
        }
        return nurseDTO;
    }
}
