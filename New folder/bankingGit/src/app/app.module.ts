import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { routing }        from './app.routing';

import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_directives/alert.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AuthenticationService } from './_services/authentication.service';
import {  UserService } from './_services/user.service';
import { AlertService } from './_services/alert.service';
import  { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WebsiteComponent } from './website/website.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    WebsiteComponent,
    AdminComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
      HttpClientModule,
      // routing
        
  ],
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        AuthService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        
        //fakebackend part 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
