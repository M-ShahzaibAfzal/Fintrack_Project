import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetSavingGoalsComponent } from './set-saving-goals/set-saving-goals.component';
import { SavingsHomepageComponent } from './savings-homepage/savings-homepage.component';
import { AddSavingAmountComponent } from './add-saving-amount/add-saving-amount.component';
import { SavingRecordsComponent } from './saving-records/saving-records.component'; // Correct import

const routes: Routes = [
  { path: '', component: SavingsHomepageComponent },
  { path: 'set-saving-goals', component: SetSavingGoalsComponent },
  { path: 'add-saving-amount', component: AddSavingAmountComponent },
  { path: 'saving-records', component: SavingRecordsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule { }
