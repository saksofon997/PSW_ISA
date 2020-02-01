package com.project.tim49.service;

import com.project.tim49.dto.OrdinationAvailabilityDTO;
import com.project.tim49.dto.OrdinationDTO;
import com.project.tim49.model.Appointment;
import com.project.tim49.model.Clinic;
import com.project.tim49.model.Doctor;
import com.project.tim49.model.Ordination;
import com.project.tim49.repository.AppointmentRepository;
import com.project.tim49.repository.ClinicRepository;
import com.project.tim49.repository.DoctorRepository;
import com.project.tim49.repository.OrdinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.*;

@Service
public class OrdinationService {

    @Autowired
    private OrdinationRepository ordinationRepository;
    @Autowired
    private ClinicRepository clinicRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;

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
                List<Appointment> appts = clinic.get().getAppointments();
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
                    List<Appointment> appointments = clinic.get().getAppointments();

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

    public boolean isAvailable(Long ordination_id, Ordination ordination, long startingTimeStamp, long duration){
        if (ordination == null){
            Optional<Ordination> check = ordinationRepository.findById(ordination_id);
            if (!check.isPresent()){
                throw new ValidationException("No ordination with that ID!");
            }
            ordination = check.get();
        }

        List<Appointment> appointments = appointmentRepository.getByOrdinationAndNotCompleted(ordination_id);
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

    public List<OrdinationDTO> getByQuery(String name, String number, Long clinic_id) {
        List<Ordination> ordinations = ordinationRepository.getByQuery(name, number, clinic_id);
        List<OrdinationDTO> ordinationDTOS = new ArrayList<>();
        for(Ordination o: ordinations) {
            OrdinationDTO ordinationDTO = new OrdinationDTO(o);
            ordinationDTOS.add(ordinationDTO);
        }
        return ordinationDTOS;
    }

    public List<OrdinationAvailabilityDTO> getOrdinationsAvailability(String name, String number, long dateStartTimestamp, Long clinic_id) {
        long dateEndTimestamp = dateStartTimestamp + 24 * 60 * 60;

        List<Ordination> ordinations = ordinationRepository.getByQuery(name, number, clinic_id);
        List<OrdinationAvailabilityDTO> ordinationDTOS = new ArrayList<>();
        for(Ordination o: ordinations) {
            List<Appointment> allAppointments = appointmentRepository.getByOrdinationAndNotCompleted(o.getId());

            OrdinationAvailabilityDTO ordinationDTO = new OrdinationAvailabilityDTO(o);
            this.setAvailablePeriods(ordinationDTO, allAppointments, dateStartTimestamp, dateEndTimestamp, false);

            if (ordinationDTO.getAvailablePeriods().size() == 0){
                ordinationDTO.setAvailable(false);
                for (int i = 1; i < 100; i++){
                    this.setAvailablePeriods(ordinationDTO, allAppointments, dateStartTimestamp + 24*60*60*i, dateEndTimestamp + 24*60*60*i, true);
                    if (ordinationDTO.getAvailablePeriods().size() != 0){
                        break;
                    }
                }
            } else {
                ordinationDTO.setAvailable(true);
            }

            ordinationDTOS.add(ordinationDTO);
        }
        return ordinationDTOS;
    }

    private void setAvailablePeriods(OrdinationAvailabilityDTO ordinationDTO, List<Appointment> allAppointments, long dateStartTimestamp, long dateEndTimestamp, boolean firstAvailableDateFlag) {
        List<Appointment> selectedAppointmentsByDate = new ArrayList<>();
        for (Appointment app : allAppointments) {
            if (app.getStartingDateAndTime() >= dateStartTimestamp && app.getEndingDateAndTime() <= dateEndTimestamp) {
                selectedAppointmentsByDate.add(app);
            } else if (app.getStartingDateAndTime() < dateStartTimestamp && app.getEndingDateAndTime() >= dateStartTimestamp) {
                selectedAppointmentsByDate.add(app);
            } else if (app.getStartingDateAndTime() < dateEndTimestamp && app.getEndingDateAndTime() >= dateEndTimestamp) {
                selectedAppointmentsByDate.add(app);
            }
        }
        Comparator<Appointment> compareByStart = Comparator.comparingLong(Appointment::getStartingDateAndTime);
        selectedAppointmentsByDate.sort(compareByStart);

        if (selectedAppointmentsByDate.isEmpty()) {
            ordinationDTO.setAvailable(true);
            long periodStart = dateStartTimestamp;
            long periodEnd = periodStart + 10 * 60;
            while (periodEnd <= dateEndTimestamp){
                ordinationDTO.getAvailablePeriods().add(periodStart + ":" + periodEnd);
                periodStart += 10 * 60;
                periodEnd += 10 * 60;
            }
            //ordinationDTO.getAvailablePeriods().add(dateStartTimestamp + ":" + dateEndTimestamp);
        } else {
            if (selectedAppointmentsByDate.get(0).getStartingDateAndTime() > dateStartTimestamp) {
                long periodStart = dateStartTimestamp;
                long periodEnd = periodStart + 10 * 60;
                while (periodEnd <= selectedAppointmentsByDate.get(0).getStartingDateAndTime()){
                    ordinationDTO.getAvailablePeriods().add(periodStart + ":" + periodEnd);
                    periodStart += 10 * 60;
                    periodEnd += 10 * 60;
                }
                //ordinationDTO.getAvailablePeriods().add(dateStartTimestamp + ":" + selectedAppointmentsByDate.get(0).getStartingDateAndTime());
            }

            if (selectedAppointmentsByDate.size() > 1) {
                for (int i = 0; i < selectedAppointmentsByDate.size() - 1; i++) {
                    if (selectedAppointmentsByDate.get(i).getEndingDateAndTime() != selectedAppointmentsByDate.get(i + 1).getStartingDateAndTime()) {
                        long periodStart = selectedAppointmentsByDate.get(i).getEndingDateAndTime();
                        long periodEnd = periodStart + 10 * 60;
                        while (periodEnd <= selectedAppointmentsByDate.get(i + 1).getStartingDateAndTime()){
                            ordinationDTO.getAvailablePeriods().add(periodStart + ":" + periodEnd);
                            periodStart += 10 * 60;
                            periodEnd += 10 * 60;
                        }
                        //ordinationDTO.getAvailablePeriods().add(selectedAppointmentsByDate.get(i).getEndingDateAndTime() + ":" + selectedAppointmentsByDate.get(i + 1).getStartingDateAndTime());
                    }
                }
                if (selectedAppointmentsByDate.get(selectedAppointmentsByDate.size() - 1).getEndingDateAndTime() < dateEndTimestamp) {
                    long periodStart = selectedAppointmentsByDate.get(selectedAppointmentsByDate.size() - 1).getEndingDateAndTime();
                    long periodEnd = periodStart + 10 * 60;
                    while (periodEnd <= dateEndTimestamp){
                        ordinationDTO.getAvailablePeriods().add(periodStart + ":" + periodEnd);
                        periodStart += 10 * 60;
                        periodEnd += 10 * 60;
                    }
                    //ordinationDTO.getAvailablePeriods().add(selectedAppointmentsByDate.get(selectedAppointmentsByDate.size() - 1).getEndingDateAndTime() + ":" + dateEndTimestamp);
                }
            } else {
                if (selectedAppointmentsByDate.get(0).getEndingDateAndTime() < dateEndTimestamp) {
                    long periodStart = selectedAppointmentsByDate.get(0).getEndingDateAndTime();
                    long periodEnd = periodStart + 10 * 60;
                    while (periodEnd <= dateEndTimestamp){
                        ordinationDTO.getAvailablePeriods().add(periodStart + ":" + periodEnd);
                        periodStart += 10 * 60;
                        periodEnd += 10 * 60;
                    }
                    //ordinationDTO.getAvailablePeriods().add(selectedAppointmentsByDate.get(0).getEndingDateAndTime() + ":" + dateEndTimestamp);
                }
            }
        }

        if (firstAvailableDateFlag && ordinationDTO.getAvailablePeriods().size() != 0){
            if (selectedAppointmentsByDate.get(0).getStartingDateAndTime() > dateStartTimestamp){
                ordinationDTO.setFirstAvailableDateTimestamp(selectedAppointmentsByDate.get(0).getStartingDateAndTime());
            } else {
                ordinationDTO.setFirstAvailableDateTimestamp(selectedAppointmentsByDate.get(0).getEndingDateAndTime());
            }
        }
    }
}
