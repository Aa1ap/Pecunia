import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'app/registration.service';
import { User } from 'app/user';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    user = new User();
    msg = '';
    constructor(private _service: RegistrationService, private _router: Router) { }

    ngOnInit() { }
    loginUser() {
        this._service.loginUserFromRemote(this.user).subscribe(
            data => {


                sessionStorage.setItem("loggedinCustomer", JSON.stringify(data));

                this._router.navigate(['/user-profile'])
            }
            ,
            error => {
                console.log("Bad Credentials! Try again");
                this.msg = "Bad Credentials! Please Try Again"
            }

        )

    }
    gotoregister() {
        this._router.navigate(['/signup'])
    }
}

