import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css']
})
export class HomeLoanComponent implements OnInit {

 
  isFormSubmitted: boolean;
  constructor() { }

  ngOnInit(): void {
  }
 
  form = new FormGroup({
    
    "firstName": new FormControl("", Validators.required),
    "lastName":new FormControl("", Validators.required),
    "dateOfBirth":new FormControl("", Validators.required),
    "occupation":new FormControl("", Validators.required),
    "expectedAmount":new FormControl("", Validators.required),
   "email":new FormControl("", Validators.compose([
    Validators.pattern ('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    Validators.required
  ])),

   "inputAddress":new FormControl("", Validators.required),
 
   "gender":new FormControl("", Validators.required),
   "accountNumber":new FormControl("", Validators.required),
   "checkBox":new FormControl("", Validators.required),
  "phone":new FormControl("", Validators.compose([
    Validators.pattern('^[0-9]{10}$'),
    Validators.required
  ])),

  "aadharCard":new FormControl("", Validators.compose([
    Validators.pattern('^[0-9]{12}$'),
    Validators.required
  ])),

  "panCard":new FormControl("", Validators.compose([
    Validators.maxLength(10),
    Validators.minLength(10),
    Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),
    Validators.required
  ])),
});


onSubmit() {
  console.warn(this.form.value);
  console.log(this.form.controls['firstName'].value);
  console.log("reactive form submitted");
console.log(this.form);
  }
  

}


