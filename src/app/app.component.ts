import { Component, HostListener, Inject } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spyss';
  

  constructor() {

  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 0.1) {
      const headerBar = document.getElementById('navbar');
      const headerimg = document.getElementById('imgNav');
      const headerbut = document.getElementById('signup');
      headerBar.classList.add('sticky');
      headerimg.classList.add('logo-class');
      headerbut.classList.add('button-color');
    } else {
      const headerBar = document.getElementById('navbar');
      const headerimg = document.getElementById('imgNav');
      const headerbut = document.getElementById('signup');
      headerBar.classList.remove('sticky');
      headerimg.classList.remove('logo-class');
      headerbut.classList.remove('button-color');
    }
  }
  
}
