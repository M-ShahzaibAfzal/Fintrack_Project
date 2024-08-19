import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SavingsRoutingModule } from './savings-routing.module';
import {SavingsHomepageComponent} from './savings-homepage/savings-homepage.component'
import { SetSavingGoalsComponent } from './set-saving-goals/set-saving-goals.component';
import { AddSavingAmountComponent } from './add-saving-amount/add-saving-amount.component';
import { SavingRecordsComponent } from './saving-records/saving-records.component';


@NgModule({
  declarations: [
    SetSavingGoalsComponent,
    SavingsHomepageComponent,
    AddSavingAmountComponent,
    SavingRecordsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SavingsRoutingModule
  ]
})
export class SavingsModule { }

