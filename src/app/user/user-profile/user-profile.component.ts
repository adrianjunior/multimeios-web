import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../student.model';
import students from '../students';
import { Teacher } from '../teacher.model';
import teachers from '../teachers';
import { Staff } from '../staff.model';
import staffs from '../staff';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  type: string;
  private id: string;
  private student: Student;
  private teacher: Teacher;
  private staff: Staff;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.type = params['type'];
      
      if(this.type == 'student'){
        for(let student of students) {
          if(student.id == this.id) {
            this.student = student;
          }
        }
      } else if(this.type == 'teacher'){
        for(let teacher of teachers) {
          if(teacher.id == this.id) {
            this.teacher = teacher;
          }
        }
      } else if(this.type == 'staff'){
        for(let staff of staffs) {
          if(staff.id == this.id) {
            this.staff = staff;
          }
        }
      } 
   });
  }

  goToDevolution() {
    this.router.navigateByUrl('devolver-livro');
  }

  onCancel() {
    this.location.back();
  }

}
