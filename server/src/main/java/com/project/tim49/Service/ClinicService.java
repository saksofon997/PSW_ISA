package com.project.tim49.Service;

import com.project.tim49.Model.Clinic;
import com.project.tim49.Repository.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

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
}