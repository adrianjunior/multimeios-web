import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { Student } from '../student.model';
import { Teacher } from '../teacher.model';
import { Staff } from '../staff.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  private student: Student;
  private teacher: Teacher;
  private staff: Staff;

  jobtypes = [
    {value: 'Efetivo', viewValue: 'Efetivo'},
    {value: 'Temporario', viewValue: 'Temporário'}
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmitStudent(form: NgForm) {
    this.student = {
      id: 'dummy',
      name: form.value.name,
      grade: form.value.grade,
      class: form.value.class,
      phone: form.value.phone,
      email: form.value.email
    };
    this.openSnackBar('Usuário registrado com sucesso!', 'OK');
    console.log(this.student);
  }

  onSubmitTeacher(form: NgForm) {
    this.teacher = {
      id: 'dummy',
      name: form.value.name,
      role: form.value.role,
      effective: form.value.effective,
      phone: form.value.phone,
      email: form.value.email
    };
    this.openSnackBar('Usuário registrado com sucesso!', 'OK');
    console.log(this.teacher);
  }

  onSubmitStaff(form: NgForm) {
    this.staff = {
      id: 'dummy',
      name: form.value.name,
      role: form.value.role,
      phone: form.value.phone,
      email: form.value.email
    };
    this.openSnackBar('Usuário registrado com sucesso!', 'OK');
    console.log(this.staff);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
