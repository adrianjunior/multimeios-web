import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { Student } from '../student.model';
import { Teacher } from '../teacher.model';
import { Staff } from '../staff.model';
import students from '../students';
import teachers from '../teachers';
import staff from '../staff';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  sDisplayedColumns = ['name', 'grade', 'class', 'phone', 'email'];
  sDataSource = new MatTableDataSource<Student>();
  tDisplayedColumns = ['name', 'role', 'effective', 'phone', 'email'];
  tDataSource = new MatTableDataSource<Teacher>();
  eDisplayedColumns = ['name', 'role', 'phone', 'email'];
  eDataSource = new MatTableDataSource<Staff>();

  @ViewChild('sSort') sSort: MatSort;
  @ViewChild('sPaginator') sPaginator: MatPaginator;
  @ViewChild('tSort') tSort: MatSort;
  @ViewChild('tPaginator') tPaginator: MatPaginator;
  @ViewChild('eSort') eSort: MatSort;
  @ViewChild('ePaginator') ePaginator: MatPaginator;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  sApplyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.sDataSource.filter = filterValue;
  }

  tApplyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.tDataSource.filter = filterValue;
  }

  eApplyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.eDataSource.filter = filterValue;
  }

  ngOnInit() {
    this.sDataSource.data = students;
    this.tDataSource.data = teachers;
    this.eDataSource.data = staff;
  }

  ngAfterViewInit() {
    this.sDataSource.sort = this.sSort;
    this.sDataSource.paginator = this.sPaginator;
    this.tDataSource.sort = this.tSort;
    this.tDataSource.paginator = this.tPaginator;
    this.eDataSource.sort = this.eSort;
    this.eDataSource.paginator = this.ePaginator;
    this.cdRef.detectChanges();
  }

  onGoToProfile(id, type) {
    this.router.navigateByUrl(`perfil-usuario/${type}/${id}`);
    console.log(id);
  }

}
