import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesHomepageComponent } from './expenses-homepage/expenses-homepage.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component'; // If you have this component
import { TotalExpensesComponent } from './total-expenses/total-expenses.component'; /
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
const routes: Routes = [
  { path: '', component: ExpensesHomepageComponent },
  { path: 'add-expenses', component: AddExpensesComponent },
  { path: 'total-expenses', component: TotalExpensesComponent },
  { path: 'delete-expense', component:DeleteExpenseComponent  },  // Add // Adjust according to your actual component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule {}
