// app.module.ts
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module'; 
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
import{ForgetPasswordComponent}from './login/forget-password/forget-password.component';
import { MegaMenuModule } from 'primeng/megamenu'; // Import MegaMenuModule
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table'; 


import { MessagesModule } from 'primeng/messages';
 // Ensure this is importe

import {IncomeModule}from './income/income.module';


import {ExpensesModule}from './expenses/expenses.module';

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
    HttpClientModule,
    MegaMenuModule,
    IncomeModule,
    ExpensesModule,
    AvatarModule,
    CalendarModule,
    InputNumberModule,
    MessagesModule,
    TableModule,
    
   

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

