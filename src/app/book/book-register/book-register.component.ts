import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


import { Book } from '../book.model';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent implements OnInit {

  private book: Book;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.book = {
      id: 'dummy',
      title: form.value.title,
      author: form.value.author,
      quantity: form.value.quantity,
      available: form.value.quantity,
      editor: form.value.editor,
      gender: form.value.gender,
      edition: form.value.edition,
      year: form.value.year
    }
    this.openSnackBar('Livro registrado com sucesso!', 'OK');
    console.log(this.book);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


}
