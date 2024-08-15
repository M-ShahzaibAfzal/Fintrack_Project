// src/app/income/income.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IncomeRoutingModule } from './income-routing.module';
import { IncomeHomepageComponent } from './income-homepage/income-homepage.component'; 
import { AddIncomeComponent } from './add-income/add-income.component';
import { DeleteIncomeComponent } from './delete-income/delete-income.component';
import { SeeIncomeComponent } from './see-income/see-income.component';

import { ReactiveFormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { UserTotalIncomeComponent } from './user-total-income/user-total-income.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';

@NgModule({
  declarations: [
    IncomeHomepageComponent,
    AddIncomeComponent,
    DeleteIncomeComponent,
    SeeIncomeComponent,
  
    UserTotalIncomeComponent,
    UpdateIncomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    IncomeRoutingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputTextModule
  ]
})
export class IncomeModule { }
