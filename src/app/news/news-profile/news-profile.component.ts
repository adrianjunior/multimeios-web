import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-profile',
  templateUrl: './news-profile.component.html',
  styleUrls: ['./news-profile.component.css']
})
export class NewsProfileComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onCancel() {
    this.location.back();
  }
}
