import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialReportsHomepageComponent } from './financial-reports-homepage/financial-reports-homepage.component';
import { MonthlyIncomeSummaryComponent } from './monthly-income-summary/monthly-income-summary.component';
import { MonthlyExpenseSummaryComponent } from './monthly-expense-summary/monthly-expense-summary.component';
import { MonthlySavingSummaryComponent } from './monthly-saving-summary/monthly-saving-summary.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { ExpenseCategoryComponent } from './expense-category/expense-category.component';
import { GetIncomeCategoryComponent } from './get-income-category/get-income-category.component';

const routes: Routes = [
  { path: '', component: FinancialReportsHomepageComponent },
  { path: 'monthly-income-summary', component: MonthlyIncomeSummaryComponent },
  { path: 'monthly-expense-summary', component:MonthlyExpenseSummaryComponent },
 { path: 'monthly-saving-summary', component:MonthlySavingSummaryComponent },
 { path: 'balance-overview', component:BalanceOverviewComponent },
 { path: 'expense-category', component:ExpenseCategoryComponent  },
 { path: 'get-income-category', component:GetIncomeCategoryComponent },


  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialReportsRoutingModule { }
