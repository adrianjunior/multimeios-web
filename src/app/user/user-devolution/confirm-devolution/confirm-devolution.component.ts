import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Book } from '../../../book/book.model';

@Component({
  selector: 'app-confirm-devolution',
  templateUrl: './confirm-devolution.component.html',
  styleUrls: ['./confirm-devolution.component.css']
})
export class ConfirmDevolutionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDevolutionComponent>,
    @Inject(MAT_DIALOG_DATA) public books: Book[]) { }

  ngOnInit() {
  }

}
