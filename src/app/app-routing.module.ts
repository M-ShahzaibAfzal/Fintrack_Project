import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VerificationComponent } from './login/verification/verification.component';
import { SeeUserComponent } from './login/see-user/see-user.component';
import { UpdateUserComponent } from './update-user/update-user.component'; 
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'see-user', component: SeeUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { 
    path: 'income', 
    loadChildren: () => import('./income/income.module').then(m => m.IncomeModule) 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
    
  },

  { path: 'expenses', loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

