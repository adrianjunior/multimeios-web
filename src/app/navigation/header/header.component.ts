import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private location: Location, private router: Router ) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }

  onGoToUserList() {
    this.router.navigateByUrl('lista-usuarios');
  }

  onGoToRegisterUser() {
    this.router.navigateByUrl('registrar-usuario');
  }

  onGoToNewsList() {
    this.router.navigateByUrl('lista-noticias');
  }

  onGoToRegisterNews() {
    this.router.navigateByUrl('registrar-noticia');
  }

  onGoToBookList() {
    this.router.navigateByUrl('lista-livros');
  }

  onGoToRegisterBook() {
    this.router.navigateByUrl('registrar-livro');
  }

  onGoToEquipList() {
    this.router.navigateByUrl('lista-equipamentos');
  }

  onGoToRegisterEquip() {
    this.router.navigateByUrl('registrar-equipamento');
  }

  onGoToRoomList() {
    this.router.navigateByUrl('lista-salas');
  }

  onGoToRegisterRoom() {
    this.router.navigateByUrl('registrar-sala');
  }

}
