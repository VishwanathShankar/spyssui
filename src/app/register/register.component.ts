import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { }
  countries  = [
    {value: 'India', viewValue: 'India'}
  ];
  Nations  = [
    {value: 'India', viewValue: 'India'}
  ];

  ngOnInit() {
  }

}
