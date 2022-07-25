import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './page/users.page';
import { ViewUserPage } from './page/view-user/view-user.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  },
  {
    path: 'view-user',
    loadChildren: () => import('./page/view-user/view-user.module').then( m => m.ViewUserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
