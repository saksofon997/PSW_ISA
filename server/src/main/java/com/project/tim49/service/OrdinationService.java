package com.project.tim49.service;

import com.project.tim49.dto.OrdinationDTO;
import com.project.tim49.model.Appointment;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.Doctor;
import com.project.tim49.model.Ordination;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.DoctorRepository;
import com.project.tim49.repository.OrdinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrdinationService {

    @Autowired
    private OrdinationRepository ordinationRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private DoctorRepository doctorRepository;

    public List<OrdinationDTO> getAll(Long clinic_id) {
        if(clinic_id != null) {
            Clinic clinic = clinicRepository.getOne(clinic_id);
            if(clinic != null) {
                List<Ordination> ords = clinic.getOrdination();
                List<OrdinationDTO> ordsdto = new ArrayList<>();
                for(Ordination ord: ords) {
                    OrdinationDTO orddto = new OrdinationDTO(ord);
                    ordsdto.add(orddto);
                }
                return ordsdto;
            }
            throw new ValidationException("Clinic does not exist!");
        }
        throw new ValidationException("Invalid clinic ID!");
    }

    public void createNewOrdination(OrdinationDTO ordinationDTO,
                                    Long clinic_id) {
        if(clinic_id != null) {
            Optional<Clinic> clinic = clinicRepository.findById(ordinationDTO.getClinic_id());
            if(clinic.isPresent()) {
                List<Ordination> ordinations = clinic.get().getOrdination();
                for(Ordination ord: ordinations)
                    if(ord.getName().equals(ordinationDTO.getName()))
                        throw new ValidationException("Ordination with that " +
                                "name already exists!");

                Ordination ord = createReal(ordinationDTO);
                ord.setClinic(clinic.get());

                ordinationRepository.save(ord);
                return;
            }
            throw new ValidationException("Clinic does not exist!");
        }
        throw new ValidationException("Invalid clinic ID!");
    }

    public boolean checkIfInUse(Long clinic_id, Long id) {
        if(id != null && clinic_id != null) {
            Optional<Clinic> clinic = clinicRepository.findById(clinic_id);
            if(clinic.isPresent()) {
                List<Appointment> appts = clinic.get().getAppointment();
                for(Appointment appt: appts) {
                    if(!appt.isCompleted())
                        if(appt.getOrdination().getId().equals(id))
                            return true;
                }
                return false;
            }
            throw new ValidationException("Invalid clinic!");
        }
        throw new ValidationException("Invalid IDs!");
    }

    public void deleteOrdination(Long id) {
        Ordination ordination = ordinationRepository.getOne(id);
        Optional<Clinic> clinic =
                clinicRepository.findById(ordination.getClinic().getId());
        if(clinic.isPresent()) {
            if(!checkIfInUse(clinic.get().getId(), id)) {
                ordinationRepository.deleteById(ordination.getId());
                return;
            }
            throw new ValidationException("Ordination is in use!");
        }
        throw new ValidationException("Clinic does not exist!");
    }

    private Ordination createReal(OrdinationDTO ordinationDTO) {
        Ordination temp = new Ordination();
        temp.setName(ordinationDTO.getName());
        temp.setNumber(ordinationDTO.getNumber());
        return temp;
    }

    public OrdinationDTO changeOrdination(OrdinationDTO ordinationDTO) {
        if(ordinationDTO.getId() != null) {
            Ordination ordToEdit =
                    ordinationRepository.getOne(ordinationDTO.getId());
            if(ordToEdit != null) {
                Optional<Clinic> clinic =
                        clinicRepository.findById(ordinationDTO.getClinic_id());
                if(clinic.isPresent()) {
                    List<Appointment> appointments = clinic.get().getAppointment();

                    for(Appointment appt: appointments)
                        if(appt.getOrdination().getId().equals(ordinationDTO.getId()))
                            throw new ValidationException("Ordination is in use!");

                    ordToEdit.setName(ordinationDTO.getName());
                    ordToEdit.setNumber(ordinationDTO.getNumber());
                    ordinationRepository.save(ordToEdit);
                    return ordinationDTO;
                }
                throw new ValidationException("Clinic does not exist!");
            }
            throw new ValidationException("Ordination does not exist!");
        }
        throw new ValidationException("Invalid ID!");
    }

    public List<OrdinationDTO> getByQuery(String name, String number, Long clinic_id) {
        List<Ordination> ordinations = ordinationRepository.getByQuery(name, number, clinic_id);
        List<OrdinationDTO> ordinationDTOS = new ArrayList<>();
        for(Ordination o: ordinations) {
            OrdinationDTO ordinationDTO = new OrdinationDTO(o);
            ordinationDTOS.add(ordinationDTO);
        }
        return ordinationDTOS;
    }
}
