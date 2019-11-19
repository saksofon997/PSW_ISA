package com.project.tim49.repository;

import com.project.tim49.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoginRepository extends JpaRepository<User, Long> {

    User findOneByEmail(String email);

    Page<User> findAll(Pageable pageable);

    List<User> findAllByEmail(String email);

    List<User> findByNameAndSurnameAllIgnoringCase(String firstName, String lastName);

}
