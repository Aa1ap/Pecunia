import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/user';
import { LoanService } from './loan.service';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css']
})
export class PersonalLoanComponent implements OnInit,OnDestroy {
  isFormSubmitted: boolean;
  form: FormGroup;
 
  constructor(private loanService:LoanService,private element : ElementRef) { }

  onClick(){
    alert("Applied for loan successfully");
    window.location.href='/myloans';
  }

  ngOnInit(): void {
    let user: User = JSON.parse(sessionStorage.getItem("loggedinCustomer"));
    this.form = new FormGroup({

      "firstName": new FormControl(user.firstname, Validators.required),
      "lastName": new FormControl(user.lastname, Validators.required),
      "dateOfBirth": new FormControl(user.dob, Validators.required),
      "occupation": new FormControl("", Validators.required),
      "loantype": new FormControl("", Validators.required),
      "email": new FormControl(user.email, Validators.compose([
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
        Validators.required
      ])),

      "inputAddress": new FormControl(user.address, Validators.required),

      "gender": new FormControl("", Validators.required),
      "amount": new FormControl("", Validators.required),
      "checkBox": new FormControl("", Validators.required),
      "phone": new FormControl(user.phone, Validators.compose([
        Validators.pattern('^[0-9]{10}$'),
        Validators.required
      ])),

      "aadharCard": new FormControl(user.aadhar, Validators.compose([
        Validators.pattern('^[0-9]{12}$'),
        Validators.required
      ])),

      "panCard": new FormControl(user.pan, Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),
        Validators.required
      ])),
    });
    this.form.controls['gender'].setValue(user.gender,{ onlySelf: true });
    const body = document.getElementsByTagName('app-nucleoicons')[0];
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
     navbar.classList.add('navbar-hidden');
    body.classList.add('demo-icons');
  }
  ngOnDestroy(){
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.classList.remove('navbar-hidden');
}




  onSubmit() {
    this.loanService.registerLoan(this.form).subscribe(
      response=>{
        let user:User=JSON.parse(sessionStorage.getItem("loggedinCustomer"));
        user.userloan=user.userloan.concat(response);
       sessionStorage.setItem("loggedinCustomer",JSON.stringify(user));
        
      },
      error=>{console.log("didnt get loan details")}
    );
  }


}



