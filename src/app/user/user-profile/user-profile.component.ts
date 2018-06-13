import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  type: string;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
  }

  goToDevolution() {
    this.router.navigateByUrl('devolver-livro');
  }

  onCancel() {
    this.location.back();
  }

}
