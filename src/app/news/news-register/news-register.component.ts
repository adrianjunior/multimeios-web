import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-news-register',
  templateUrl: './news-register.component.html',
  styleUrls: ['./news-register.component.css']
})
export class NewsRegisterComponent  {

  constructor(private snackBar: MatSnackBar) { }

  onSubmit() {
    this.openSnackBar('Notícia postada com sucesso!', 'OK');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
