import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { BookListComponent } from './book/book-list/book-list.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookProfileComponent } from './book/book-profile/book-profile.component';
import { BookRegisterComponent } from './book/book-register/book-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserReservationsComponent } from './user/user-reservations/user-reservations.component';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeRegisterComponent } from './employee/employee-register/employee-register.component';
import { EquipEditComponent } from './equip/equip-edit/equip-edit.component';
import { EquipListComponent } from './equip/equip-list/equip-list.component';
import { EquipProfileComponent } from './equip/equip-profile/equip-profile.component';
import { EquipRegisterComponent } from './equip/equip-register/equip-register.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsProfileComponent } from './news/news-profile/news-profile.component';
import { NewsRegisterComponent } from './news/news-register/news-register.component';
import { RoomEditComponent } from './room/room-edit/room-edit.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomProfileComponent } from './room/room-profile/room-profile.component';
import { RoomRegisterComponent } from './room/room-register/room-register.component';
import { LogsListComponent } from './logs/logs-list/logs-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'editar-livro/:id', component: BookEditComponent},
  { path: 'lista-livros', component: BookListComponent},
  { path: 'perfil-livro/:id', component: BookProfileComponent}, 
  { path: 'registrar-livro', component: BookRegisterComponent}, 
  { path: 'editar-usuario/:id', component: UserEditComponent}, 
  { path: 'lista-usuarios', component: UserListComponent}, 
  { path: 'perfil-usuario/:id', component: UserProfileComponent}, 
  { path: 'registrar-usuario', component: UserRegisterComponent}, 
  { path: 'reservas-usuario/:id', component: UserReservationsComponent}, 
  { path: 'editar-funcionario/:id', component: EmployeeEditComponent}, 
  { path: 'lista-funcionarios', component: EmployeeListComponent}, 
  { path: 'perfil-funcionario/:id', component: EmployeeProfileComponent}, 
  { path: 'registrar-funcionario', component: EmployeeRegisterComponent}, 
  { path: 'editar-equipamento/:id', component: EquipEditComponent}, 
  { path: 'lista-equipamentos', component: EquipListComponent}, 
  { path: 'perfil-equipamento/:id', component: EquipProfileComponent}, 
  { path: 'registrar-equipamento', component: EquipRegisterComponent}, 
  { path: 'editar-noticia/:id', component: NewsEditComponent}, 
  { path: 'lista-noticia', component: NewsListComponent}, 
  { path: 'perfil-noticia/:id', component: NewsProfileComponent}, 
  { path: 'registrar-noticia', component: NewsRegisterComponent}, 
  { path: 'editar-sala/:id', component: RoomEditComponent}, 
  { path: 'lista-salas', component: RoomListComponent}, 
  { path: 'perfil-sala/:id', component: RoomProfileComponent}, 
  { path: 'registar-sala', component: RoomRegisterComponent},
  { path: 'logs', component: LogsListComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
