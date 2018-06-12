import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Book } from '../../book.model';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.css']
})
export class UserValidationComponent {

  formType: number = 1;

  jobtypes = [
    {value: 'Efetivo', viewValue: 'Efetivo'},
    {value: 'Temporario', viewValue: 'Temporário'}
  ];

  constructor(
    public dialogRef: MatDialogRef<UserValidationComponent>,
    @Inject(MAT_DIALOG_DATA) public books: Book[]) { }

  changeForm() {
    if (this.formType === 1) {
      this.formType = 2;
    } else {
      this.formType = 1;
    }
  }
}