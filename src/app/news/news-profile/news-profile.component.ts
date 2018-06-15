import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { News } from '../news.model';
import newss from '../news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-profile',
  templateUrl: './news-profile.component.html',
  styleUrls: ['./news-profile.component.css']
})
export class NewsProfileComponent implements OnInit {

  private id: string;
  private news: News;
  private sub: any;

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      for(let news of newss) {
        if(news.id == this.id) {
          this.news = news;
        }
      }
   });
  }

  onCancel() {
    this.location.back();
  }
}
