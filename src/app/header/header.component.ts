import { Component, OnInit } from '@angular/core';

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

  onChange(select) {
    this.selected = !select;
  }
  onselectBranch(select) {
    this.selectBranch = !select;
  }
}
