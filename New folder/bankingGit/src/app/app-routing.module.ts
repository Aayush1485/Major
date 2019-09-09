import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WebsiteComponent } from './website/website.component';
import { UserComponent } from './user/user.component';

import { AuthGuard } from './auth.guard';
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch:"full", component: WebsiteComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent , canActivate: [AuthGuard] },


  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
