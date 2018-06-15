import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Book } from '../../book/book.model';
import { ConfirmDevolutionComponent } from './confirm-devolution/confirm-devolution.component';

@Component({
  selector: 'app-user-devolution',
  templateUrl: './user-devolution.component.html',
  styleUrls: ['./user-devolution.component.css']
})
export class UserDevolutionComponent implements OnInit, AfterViewInit {

  displayedColumns = ['select', 'title', 'author'];
  dataSource = new MatTableDataSource<Book>();
  dataLength;
  selection = new SelectionModel<Book>(true, []);

  books = [
    {id: 'book1',
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    editor: 'Martin Claret',
    gender: 'Romance Nacional',
    quantity: 2,
    available: 1}
  ];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.dataSource.data = this.books;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataLength;
    return numSelected === numRows;
  }

  masterToggle() {
    this.dataLength = this.dataSource.data.length;
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  onReturn() {
    let dialogRef = this.dialog.open(ConfirmDevolutionComponent, {
      width: '600px',
      data: this.selection.selected
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.openSnackBar('Livro(s) devolvido(s) com sucesso!', 'OK');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
