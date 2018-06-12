import { Component, OnInit, Input  } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageName: string;

  constructor( private location: Location, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    
  }

  onGoBack() {
    this.location.back();
  }

  onGoToUserList() {
    this.router.navigateByUrl('lista-usuarios');
    this.pageName = 'Lista de Usuários';
  }

  onGoToRegisterUser() {
    this.router.navigateByUrl('registrar-usuario');
    this.pageName = 'Registrar Novo Usuário';
  }

  onGoToNewsList() {
    this.router.navigateByUrl('lista-noticias');
    this.pageName = 'Lista de Notícias';
  }

  onGoToRegisterNews() {
    this.router.navigateByUrl('registrar-noticia');
    this.pageName = 'Postar Nova Notícia';
  }

  onGoToBookLoan() {
    this.router.navigateByUrl('alugar-livros');
    this.pageName = 'Alugar Livros';
  }

  onGoToBookList() {
    this.router.navigateByUrl('lista-livros');
    this.pageName = 'Lista de Livros';
  }

  onGoToRegisterBook() {
    this.router.navigateByUrl('registrar-livro');
    this.pageName = 'Registrar Novo Livro';
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
