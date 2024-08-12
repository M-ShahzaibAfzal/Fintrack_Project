import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { LoginAsAdminComponent } from './login-as-admin/login-as-admin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';

const routes: Routes = [
  { path: 'login-as-admin', component: LoginAsAdminComponent },
  { path: 'admin-verification', component: AdminVerificationComponent },
  { path: 'admin-signup', component: AdminSignupComponent },
];

@NgModule({
  declarations: [
    LoginAsAdminComponent,
    AdminSignupComponent,
    AdminVerificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {}
