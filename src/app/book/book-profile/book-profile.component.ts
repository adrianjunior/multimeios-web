import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {

  private id: string;
  private book: Book;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

}
