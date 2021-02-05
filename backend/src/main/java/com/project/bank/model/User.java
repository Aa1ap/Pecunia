package com.project.bank.model;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;



@Entity
public class User {
		

	
	private int phone;
	private String firstname;
	private String lastname;
	private String gender;
	private LocalDate dob;
	private String address;
	@Id
	private String email;
	private long aadhar;
	private String pan;
	private String password;
	private String acctype;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "email")
	private	List<Loan> userloan;
	public User() {}
	
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getAadhar() {
		return aadhar;
	}
	public void setAadhar(long aadhar) {
		this.aadhar = aadhar;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAcctype() {
		return acctype;
	}
	public void setAcctype(String acctype) {
		this.acctype = acctype;
	}
	public List<Loan> getUserloan() {
		return userloan;
	}
	public void setUserloan(List<Loan> userloan) {
		this.userloan = userloan;
	}
	public User( int phone, String firstname, String lastname, String gender, LocalDate dob, String address,
			String email, long aadhar, String pan, String password, String acctype, List<Loan> userloan) {
		super();
		
		this.phone = phone;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.dob = dob;
		this.address = address;
		this.email = email;
		this.aadhar = aadhar;
		this.pan = pan;
		this.password = password;
		this.acctype = acctype;
		this.userloan = userloan;
	}
	
	
	

}
