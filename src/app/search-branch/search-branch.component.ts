import { Component, OnInit } from '@angular/core';
import * as mockBranchData from '../mockData/branchResponse.json'
@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  constructor() { }
  locations: any[];
  branchPinCode: any;

  ngOnInit() {
    //this.locations = mockBranchData;
    this.locations = [
      {
          "name": "SPYSS Basaveshwarnagar 1",
          "pin": 560079
  
      },
      {
          "name": "SPYSS Basaveshwarnagar 2",
          "pin": 560079
      },  
      {
          "name": "SPYSS JP nagar",
          "pin": 560078
      } 
  ]
    //console.log(this.locations);
  }

}
