import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConstantService } from '../constant.service';

@Component({
  selector: 'app-ourbranches',
  templateUrl: './ourbranches.component.html',
  styleUrls: ['./ourbranches.component.css']
})
export class OurbranchesComponent implements OnInit {
  displayedColumns: string[] = ['branchId',
    'batchTimings',
    'branchName',
    'address',
    'country',
    'state',
    'city',
    'contactNumber',
    'batchType'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  sortField: any;
  searchField: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  pageSize = 5;
  length = 0;
  pageSizeOptions = [5, 10, 20, 100];
  constructor(private constantService: ConstantService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sortField = 'branchName';
    this.searchField = '';
    this.getDetails({});
  }

  getDetails(pageData) {
    this.constantService.post(ConstantService.urls.searchBranch, {
      'sortBy': 'ASC',
      'search': this.searchField,
      'columnname': this.sortField,
      'pageSize': '5',
      'pageNo': '0',
      ...pageData
    }).subscribe((data: any) => {
      this.dataSource = data.content;
      this.length = data.totalElements;
    })
  }

  search() {
    this.getDetails({
      'search': this.searchField,
      'columnname': this.sortField,
    });
  }

  paginate({ pageIndex, previousPageIndex, pageSize, length }) {
    this.getDetails({ pageSize, pageNo: pageIndex,  'search': this.searchField,
    'columnname': this.sortField, });
  }
}
