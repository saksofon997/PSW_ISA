package com.project.tim49.Repository;

import com.project.tim49.Model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoginRepository extends JpaRepository<User, Long> {

    User findOneByEmailIgnoringCase(String email);

    Page<User> findAll(Pageable pageable);

    List<User> findAllByEmail(String email);

    List<User> findByNameAndSurnameAllIgnoringCase(String firstName, String lastName);

}
