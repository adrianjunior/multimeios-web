import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  type: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
  }

  goToDevolution() {
    this.router.navigateByUrl('devolver-livro');
  }

}
