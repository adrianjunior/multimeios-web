import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Equip } from '../equip.model';

@Component({
  selector: 'app-equip-register',
  templateUrl: './equip-register.component.html',
  styleUrls: ['./equip-register.component.css']
})
export class EquipRegisterComponent implements OnInit {

  private equip: Equip;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.equip = {
      id: 'dummy',
      name: form.value.name,
      type: form.value.type
    }
    console.log(this.equip);
  }

}
