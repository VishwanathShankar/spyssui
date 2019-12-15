import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  image='/assets/images/Main_yoga.jpg';
  images = []
  constructor() { }

  ngOnInit() {
  }

}
