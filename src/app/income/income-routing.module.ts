import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeHomepageComponent } from './income-homepage/income-homepage.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { DeleteIncomeComponent } from './delete-income/delete-income.component';
import { SeeIncomeComponent } from './see-income/see-income.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';
import { UserTotalIncomeComponent } from './user-total-income/user-total-income.component';


const routes: Routes = [
  { path: '', component: IncomeHomepageComponent },
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'delete-income', component: DeleteIncomeComponent },
  { path: 'see-income', component: SeeIncomeComponent },
  { path: 'update-income', component:UpdateIncomeComponent  },
  { path: 'user-total-income', component:UserTotalIncomeComponent  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
