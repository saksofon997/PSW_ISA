package com.project.tim49.service;

import com.project.tim49.model.Authority;

import java.util.List;

public interface AuthorityService {
    List<Authority> findById(Long id);
    List<Authority> findByname(String name);
}
