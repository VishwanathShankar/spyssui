import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-branch',
  templateUrl: './find-branch.component.html',
  styleUrls: ['./find-branch.component.css']
})
export class FindBranchComponent implements OnInit {
  locations: any[];

  constructor() { }

  ngOnInit() {
    this.locations = [
      {
        name: 'location1'
      },
      {
        name: 'location2'
      },
      {
        name: 'location3'
      }
    ]
  }

}
