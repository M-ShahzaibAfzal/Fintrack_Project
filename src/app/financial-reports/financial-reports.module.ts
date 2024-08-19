import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyIncomeSummaryComponent } from './monthly-income-summary/monthly-income-summary.component';
import { FormsModule } from '@angular/forms';
import { FinancialReportsRoutingModule } from './financial-reports-routing.module';
import { FinancialReportsHomepageComponent } from './financial-reports-homepage/financial-reports-homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonthlyExpenseSummaryComponent } from './monthly-expense-summary/monthly-expense-summary.component';
import { MonthlySavingSummaryComponent } from './monthly-saving-summary/monthly-saving-summary.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { ExpenseCategoryComponent } from './expense-category/expense-category.component';
import { GetIncomeCategoryComponent } from './get-income-category/get-income-category.component';

@NgModule({
  declarations: [
    MonthlyIncomeSummaryComponent,
    FinancialReportsHomepageComponent,
    MonthlyExpenseSummaryComponent,
    MonthlySavingSummaryComponent,
    BalanceOverviewComponent,
    ExpenseCategoryComponent,
    GetIncomeCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FinancialReportsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FinancialReportsModule { }
