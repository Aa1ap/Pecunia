import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {  
    private toggleButton: any;
    private sidebarVisible: boolean;


    constructor(public location: Location, private element : ElementRef) { 
        this.sidebarVisible = false;
    }

    ngOnInit() {const profile: HTMLElement = this.element.nativeElement;
        this.toggleButton = profile.getElementsByClassName('navbar-toggler')[0];
        const body = document.getElementsByTagName('app-nucleoicons')[0];
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
        }
        ngOnDestroy(){
            let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
            navbar.classList.remove('navbar-hidden');
        }
sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
};
sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
};
sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
};
isHome() {
  var titlee = this.location.prepareExternalUrl(this.location.path());
  if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
  }
    if( titlee === '/home' ) {
        return true;
    }
    else {
        return false;
    }
}
isDocumentation() {
  var titlee = this.location.prepareExternalUrl(this.location.path());
  if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
  }
    if( titlee === '/documentation' ) {
        return true;
    }
    else {
        return false;
    }
}
}

