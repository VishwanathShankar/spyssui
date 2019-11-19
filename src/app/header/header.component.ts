import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selected = false;
  selectBranch = false;

  constructor() { }

  ngOnInit() {
  }
  contact() {
    const headerBar = document.getElementById('navbar');
    const headerimg = document.getElementById('imgNav');
    const headerbut = document.getElementById('signup');
    headerBar.classList.add('sticky-header');
    headerimg.classList.add('logo-class-header');
    headerbut.classList.add('button-color-header');
  }

  home() {
    const headerBar = document.getElementById('navbar');
    const headerimg = document.getElementById('imgNav');
    const headerbut = document.getElementById('signup');
    headerBar.classList.remove('sticky-header');
    headerimg.classList.remove('logo-class-header');
    headerbut.classList.remove('button-color-header');
  }

}
