package com.project.tim49.Service;

import com.project.tim49.Dto.ClinicDTO;
import com.project.tim49.Model.Clinic;
import com.project.tim49.Repository.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.List;

@Service
public class ClinicService {

    @Autowired
    private ClinicRepository clinicRepository;

    public Clinic findOne(Long id) {
        return clinicRepository.findById(id).orElseGet(null);
    }

    public List<Clinic> findAll() {
        return clinicRepository.findAll();
    }

//    public Page<Clinic> findAll(Pageable page) {
//        return clinicRepository.findAll(page);
//    }

    public Clinic save(Clinic course) {
        return clinicRepository.save(course);
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
                clinicRepository.deleteById(id);
                return true;
            }
            throw new ValidationException("Clinic does not exist!");
        }
        throw new ValidationException("Clinic ID has null value!");
    }
}
