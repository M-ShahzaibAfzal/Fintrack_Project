import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ExpensesHomepageComponent } from './expenses-homepage/expenses-homepage.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber'

import { CalendarModule } from 'primeng/calendar';

import { MessagesModule } from 'primeng/messages';
import { TotalExpensesComponent } from './total-expenses/total-expenses.component';
import { TableModule } from 'primeng/table';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';



@NgModule({
  declarations: [
    AddExpensesComponent,
    ExpensesHomepageComponent,
    TotalExpensesComponent,
    DeleteExpenseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    InputNumberModule,
  
    CalendarModule,
    TableModule,

    MessagesModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
})
export class ExpensesModule { }