import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './page/users.page';
import { DisplayComponent } from './component/display/display.component';
import { NewUserComponent } from './page/new-user/new-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [UsersPage, DisplayComponent,NewUserComponent]
})
export class UsersPageModule {}
