package com.project.bank.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bank.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer> {
	
	Optional<User> findByEmail(String mail);
	Optional<User> findByEmailAndPassword(String mail,String pass);
}

 