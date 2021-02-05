import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { VehicleLoanComponent } from './vehicle-loan/vehicle-loan.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        SignInComponent,
        PersonalLoanComponent,
        HomeLoanComponent,
        VehicleLoanComponent,
        GoldLoanComponent
    ]
})
export class ExamplesModule { }
