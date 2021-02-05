package com.project.bank.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.bank.model.Loan;

public interface LoanRepository extends CrudRepository<Loan, Integer> {
	
}
