import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { Book } from '../book.model';
import books from '../books';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {

  private id: string;
  private book: Book;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      for(let book of books) {
        if(book.id == this.id) {
          this.book = book;
        }
      }
   });
  }

  onCancel() {
    this.location.back();
  }

}
