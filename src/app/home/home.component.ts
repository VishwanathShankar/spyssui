import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

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

  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer, @Inject(DOCUMENT) document ) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CjVDbVYNes4');
  }

  ngOnInit() {
  }

  searchGoogleForNearestBranch() {
    console.log("Inside google search");
    var url ='http://www.google.com/search?q=' + 'SPYSS near me';
    window.open(url,'_blank');
  }



}
