package com.project.bank.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Loan { 
	
	
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Id
	private int loanid;
	private String occupation;
	private String loantype;
	private long amount;
	
	public Loan() {}

	public Loan(int loanid, String occupation, String loantype, long amount) {
		super();
		this.loanid = loanid;
		this.occupation = occupation;
		this.loantype = loantype;
		this.amount = amount;
	}


	public String getLoantype() {
		return loantype;
	}

	public void setLoantype(String loantype) {
		this.loantype = loantype;
	}

	public int getLoanid() {
		return loanid;
	}

	public void setLoanid(int loanid) {
		this.loanid = loanid;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public long getAmount() {
		return amount;
	}

	public void setAmount(long amount) {
		this.amount = amount;
	}
	
	
	
	
}
