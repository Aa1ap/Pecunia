package com.project.bank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.bank.model.Loan;
import com.project.bank.model.User;

import com.project.bank.repository.RegistrationRepository;

@Service
public class RegisterService {

	@Autowired
	private RegistrationRepository repo;


	public User saveUser(User user) {
		return repo.save(user);
	}

	public User fetchEmail(String mail) {
		
		if(repo.findByEmail(mail).isPresent())
			return repo.findByEmail(mail).get();
		else
			return null;
			
		
	}

	public User fetchEmailAndPass(String mail, String pass) {
		User user = repo.findByEmailAndPassword(mail, pass).get();
		return user;
	}

	public Loan SaveLoan(String email,Loan a) {
		User user=repo.findByEmail(email).get();
		List<Loan> loans= user.getUserloan();
		loans.add(a);
		user.setUserloan(loans);
		repo.save(user);
		return a;
	}

}
