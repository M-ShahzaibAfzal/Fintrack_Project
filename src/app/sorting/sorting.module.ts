import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortIncomeByDateComponent } from './sort-income-by-date/sort-income-by-date.component';
import { SortIncomeInDesComponent } from './sort-income-in-des/sort-income-in-des.component';
import { SortIncomeInAscComponent } from './sort-income-in-asc/sort-income-in-asc.component';
import { SortExpenseByDateComponent } from './sort-expense-by-date/sort-expense-by-date.component';
import { SortExpenseInDesComponent } from './sort-expense-in-des/sort-expense-in-des.component';
import { SortExpenseInAscComponent } from './sort-expense-in-asc/sort-expense-in-asc.component';
import { SortingRoutingModule } from './sorting-routing.module';
import { SortingHomepageComponent } from './sorting-homepage/sorting-homepage.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SortIncomeByDateComponent,
    SortIncomeInDesComponent,
    SortIncomeInAscComponent,
    SortExpenseByDateComponent,
    SortExpenseInDesComponent,
    SortExpenseInAscComponent,
    SortingHomepageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SortingRoutingModule
  ]
})
export class SortingModule { }
