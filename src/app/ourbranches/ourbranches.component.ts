import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ourbranches',
  templateUrl: './ourbranches.component.html',
  styleUrls: ['./ourbranches.component.css']
})
export class OurbranchesComponent implements OnInit {
  PeriodicElement: any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', contact: '123456' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', contact: '123456' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', contact: '123456' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', contact: '123456' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', contact: '123456' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', contact: '123456' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', contact: '123456' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', contact: '123456' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', contact: '123456' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', contact: '123456' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', contact: '123456' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', contact: '123456' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', contact: '123456' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', contact: '123456' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', contact: '123456' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', contact: '123456' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', contact: '123456' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', contact: '123456' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', contact: '123456' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', contact: '123456' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'contact'];
  dataSource = new MatTableDataSource(this.PeriodicElement);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild (MatSort, {static: true}) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
