import { ElementRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/user';
@Component({
  selector: 'app-gold-loan',
  templateUrl: './gold-loan.component.html',
  styleUrls: ['./gold-loan.component.css']
})
export class GoldLoanComponent implements OnInit, OnDestroy {
  isFormSubmitted: boolean;
  userData:User;
 
  
  constructor(private element : ElementRef) {
    
   }

  ngOnInit(): void {
    this.userData=JSON.parse(sessionStorage.getItem("loggedinCustomer"));
    const body = document.getElementsByTagName('app-nucleoicons')[0];
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
     navbar.classList.add('navbar-hidden');
    body.classList.add('demo-icons');
  }
  ngOnDestroy(){
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.classList.remove('navbar-hidden');
}
}
