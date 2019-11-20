import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  selected = false;
  selectBranch = false;
  commonHeader: boolean;

  ngOnInit() {
  }
  common() {
    const headerBar = document.getElementById('navbar');
    const headerimg = document.getElementById('imgNav');
    const headerbut = document.getElementById('signup');
    headerBar.classList.add('sticky-header');
    headerimg.classList.add('logo-class-header');
    headerbut.classList.add('button-color-header');
    this.commonHeader = true;
  }

  home() {
    this.commonHeader = false;
    const headerBar = document.getElementById('navbar');
    const headerimg = document.getElementById('imgNav');
    const headerbut = document.getElementById('signup');
    headerBar.classList.remove('sticky-header');
    headerimg.classList.remove('logo-class-header');
    headerbut.classList.remove('button-color-header');
  }

}
