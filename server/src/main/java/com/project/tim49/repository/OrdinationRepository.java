package com.project.tim49.repository;

import com.project.tim49.model.Clinic;
import com.project.tim49.model.Ordination;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.ArrayList;
import java.util.List;

public interface OrdinationRepository extends JpaRepository<Ordination, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select ordination from Ordination ordination where ordination.id = ?1")
    @QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value ="0")})
    Ordination findOneByIdAndLock(Long id);

    @Query("select ordination from Ordination ordination where " +
            "(?1 is null or upper(ordination.name) like concat('%', upper(?1), '%')) " +
            "and (?2 is null or upper(ordination.number) like concat('%', upper(?2), '%')) " +
            "and (ordination.clinic.id = ?3)")
    List<Ordination> getByQuery(String name, String number, Long clinic_id);

    ArrayList<Ordination> getAllByClinic(Clinic clinic);

}
