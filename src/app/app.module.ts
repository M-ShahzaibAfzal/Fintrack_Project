// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module'; // Import AdminModule
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VerificationComponent } from './login/verification/verification.component';
import { SeeUserComponent } from './login/see-user/see-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import{ForgetPasswordComponent}from './login/forget-password/forget-password.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignUpComponent,
    HomePageComponent,
    VerificationComponent,
    SeeUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, // Import AdminModule here
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

