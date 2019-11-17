package com.project.tim49.Service;

import com.project.tim49.Dto.ClinicDTO;
import com.project.tim49.Model.Clinic;
import com.project.tim49.Repository.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void remove(Long id) {
        clinicRepository.deleteById(id);
    }

    public Clinic getReference(Long id) {
        return clinicRepository.getOne(id);
    }

    public boolean changeClinicInfo(Clinic zaIzmenu, ClinicDTO clinicDTO) {
        if(zaIzmenu != null && clinicDTO != null) {

            zaIzmenu.setAddress(clinicDTO.getAddress());
            zaIzmenu.setCity(clinicDTO.getCity());
            zaIzmenu.setDescription(clinicDTO.getDescription());
            zaIzmenu.setName(clinicDTO.getName());
            zaIzmenu.setState(clinicDTO.getState());

            return true;
        }
        else
            return false;
    }

    public boolean deleteClinic(Long id) {
        if (id != null) {
            Clinic zaBrisanje = findOne(id);

            if(zaBrisanje != null) {
                remove(id);
                return true;
            }
            throw new ValidationException("Clinic does not exist!");
        }
        throw new ValidationException("Clinic ID has null value!");
    }
}