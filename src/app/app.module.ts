import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserReservationsComponent } from './user/user-reservations/user-reservations.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookProfileComponent } from './book/book-profile/book-profile.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookRegisterComponent } from './book/book-register/book-register.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { EmployeeRegisterComponent } from './employee/employee-register/employee-register.component';
import { EquipListComponent } from './equip/equip-list/equip-list.component';
import { EquipProfileComponent } from './equip/equip-profile/equip-profile.component';
import { EquipRegisterComponent } from './equip/equip-register/equip-register.component';
import { EquipEditComponent } from './equip/equip-edit/equip-edit.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomProfileComponent } from './room/room-profile/room-profile.component';
import { RoomRegisterComponent } from './room/room-register/room-register.component';
import { RoomEditComponent } from './room/room-edit/room-edit.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsProfileComponent } from './news/news-profile/news-profile.component';
import { NewsRegisterComponent } from './news/news-register/news-register.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { LogsListComponent } from './logs/logs-list/logs-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BookLoanComponent } from './book/book-loan/book-loan.component';
import { UserValidationComponent } from './book/book-loan/user-validation/user-validation.component';
import { UserDevolutionComponent } from './user/user-devolution/user-devolution.component';
import { ConfirmDevolutionComponent } from './user/user-devolution/confirm-devolution/confirm-devolution.component';
import { LogoutConfirmationComponent } from './navigation/header/logout-confirmation/logout-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    EmployeeEditComponent,
    UserListComponent,
    UserProfileComponent,
    UserEditComponent,
    UserReservationsComponent,
    BookListComponent,
    BookProfileComponent,
    BookEditComponent,
    BookRegisterComponent,
    UserRegisterComponent,
    EmployeeRegisterComponent,
    EquipListComponent,
    EquipProfileComponent,
    EquipRegisterComponent,
    EquipEditComponent,
    RoomListComponent,
    RoomProfileComponent,
    RoomRegisterComponent,
    RoomEditComponent,
    NewsListComponent,
    NewsProfileComponent,
    NewsRegisterComponent,
    NewsEditComponent,
    LogsListComponent,
    HeaderComponent,
    BookLoanComponent,
    UserValidationComponent,
    UserDevolutionComponent,
    ConfirmDevolutionComponent,
    LogoutConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UserValidationComponent,
    ConfirmDevolutionComponent,
    LogoutConfirmationComponent
  ]
})
export class AppModule { }
