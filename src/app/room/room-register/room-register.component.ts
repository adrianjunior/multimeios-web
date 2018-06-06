import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Room } from '../room.model';

@Component({
  selector: 'app-room-register',
  templateUrl: './room-register.component.html',
  styleUrls: ['./room-register.component.css']
})
export class RoomRegisterComponent implements OnInit {

  private room: Room;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.room = {
      id: 'dummy',
      name: form.value.name
    }
    console.log(this.room);
  }

}
