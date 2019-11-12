import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/images/Scroll/Class.jpg',
    // thumbImage: 'assets/img/slider/1_min.jpeg',
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
  constructor() { }

  ngOnInit() {
  }
}
