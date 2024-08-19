import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components related to sorting
import { SortIncomeByDateComponent } from './sort-income-by-date/sort-income-by-date.component';
import { SortIncomeInAscComponent } from './sort-income-in-asc/sort-income-in-asc.component';
import { SortIncomeInDesComponent } from './sort-income-in-des/sort-income-in-des.component';
import { SortExpenseByDateComponent } from './sort-expense-by-date/sort-expense-by-date.component';
import { SortExpenseInAscComponent } from './sort-expense-in-asc/sort-expense-in-asc.component';
import { SortExpenseInDesComponent } from './sort-expense-in-des/sort-expense-in-des.component';
import { SortingHomepageComponent } from './sorting-homepage/sorting-homepage.component';
const routes: Routes = [
  
  { path: '', component: SortingHomepageComponent },
  { path: 'sort-income-by-date', component: SortIncomeByDateComponent },
  { path: 'sort-income-in-asc', component: SortIncomeInAscComponent },
  { path: 'sort-income-in-des', component: SortIncomeInDesComponent },
  { path: 'sort-expense-by-date', component: SortExpenseByDateComponent },
  { path: 'sort-expense-in-asc', component: SortExpenseInAscComponent },
  { path: 'sort-expense-in-des', component: SortExpenseInDesComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule { }
