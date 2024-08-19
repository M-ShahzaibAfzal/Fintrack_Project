import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.css']
})
export class BalanceOverviewComponent {
  CNIC: string = '';
  result: any = null; // Initialize result as null
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm): void {
    if (!this.CNIC) {
      this.errorMessage = 'Please enter a valid CNIC.';
      return;
    }

    this.http.post('/getBalanceOverview', { CNIC: this.CNIC }).subscribe(
      (response: any) => {
        this.result = response;
        this.errorMessage = '';
      },
      (error: any) => {
        this.errorMessage = error.error?.message || 'Failed to fetch data.';
        this.result = null;
      }
    );
  }
}
