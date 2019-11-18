import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class HomeComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/images/Scroll/Class.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'assets/images/Scroll/yoga_home_page.png',
    title: 'Image title',
    alt: 'Image alt'
  }
    , {
    image: 'assets/images/Scroll/tittle-inside-yoga-wallpaper.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];
  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
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
