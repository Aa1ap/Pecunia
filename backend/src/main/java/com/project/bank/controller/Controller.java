package com.project.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.project.bank.model.Loan;
import com.project.bank.model.User;
import com.project.bank.service.RegisterService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

	@Autowired
	private RegisterService service;

	@PostMapping("/signup")
	
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			User userobj = service.fetchEmail(tempEmail);
			if (userobj != null) {
				throw new Exception("User with " + tempEmail + " already exist");
			}
		}
		
		return service.saveUser(user);
		
	}

	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		User userObj = null;
		if (tempEmail != null && tempPass != null) {
			userObj = service.fetchEmailAndPass(tempEmail, tempPass);
		}
		if (userObj == null)
			throw new Exception("Bad credentials");
		return userObj;
	}
	
	@PostMapping("/registerLoan/{emailID:.+}")
	public Loan registerLoan(@RequestBody Loan loan,@PathVariable("emailID") String emailid) throws Exception {
		return service.SaveLoan(emailid, loan);
	}
	
	
	

}
