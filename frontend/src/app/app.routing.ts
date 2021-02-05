import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { SignInComponent } from './examples/sign-in/sign-in.component';
import { HomeLoanComponent } from './examples/home-loan/home-loan.component';
import { PersonalLoanComponent } from './examples/personal-loan/personal-loan.component';
import { VehicleLoanComponent } from './examples/vehicle-loan/vehicle-loan.component';
import { GoldLoanComponent } from './examples/gold-loan/gold-loan.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'login',           component: SignupComponent },
    { path: 'about',          component: LandingComponent },
    { path: 'contacts',      component: NucleoiconsComponent },
    { path: 'signup',      component: SignInComponent},
    { path: 'vehicleloan', component: VehicleLoanComponent, },
    { path: 'homeloan',      component: HomeLoanComponent},
    { path: 'personalloan',      component: PersonalLoanComponent},
    { path: 'myloans',      component: GoldLoanComponent},
    

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
