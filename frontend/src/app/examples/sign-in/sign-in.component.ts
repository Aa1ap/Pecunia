import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'app/registration.service';
import { User } from 'app/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isFormSubmitted: boolean;
  user = new User();
  msg='';


  constructor(private _service:RegistrationService, private _router:Router) { }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
        data => {console.log("register Success!") ;
        this._router.navigate(['/login'])
      },
        error => {console.log("error during register");
        alert("Email id/Phone number already exist!")}
        
    )
   }
  ngOnInit(): void {
  }
 
  form = new FormGroup({
    
    "firstName": new FormControl("", Validators.required),
    "lastName":new FormControl("", Validators.required),
    "dateOfBirth":new FormControl("", Validators.required),
   "email":new FormControl("", Validators.compose([
    Validators.pattern ('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    Validators.required
  ])),
    "checkBox":new FormControl("",Validators.required),
   "inputAddress":new FormControl("", Validators.required),

   "gender":new FormControl("", Validators.required),
  
   "accountType":new FormControl("", Validators.required),
   
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

  
  "password":new FormControl("", Validators.compose([
    Validators.required,
  
  ])),

});
gotologin(){
  this._router.navigate(['/login'])
}

onSubmit() {
  console.warn(this.form.value);
  console.log(this.form.controls['firstName'].value);
  console.log("reactive form submitted");
console.log(this.form);

}
}