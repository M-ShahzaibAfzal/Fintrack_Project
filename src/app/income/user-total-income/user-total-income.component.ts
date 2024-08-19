import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-total-income',
  templateUrl: './user-total-income.component.html',
  styleUrls: ['./user-total-income.component.css']
})
export class UserTotalIncomeComponent implements OnInit {
  totalIncomeForm: FormGroup;
  totalIncome: number | null = null;
  records: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.totalIncomeForm = this.fb.group({
      cnic: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.totalIncomeForm.valid) {
      const { cnic } = this.totalIncomeForm.value;
      this.http.get('http://localhost:10000/api/finance/UserTotalIncome/3840398168721', {
      
      })
        .subscribe({
          next: (response: any) => {
            this.totalIncome = response.totalIncome;
            this.records = response.records;
            this.message = response.message;
          },
          error: (error) => {
            this.message = error.error.message || 'Failed to fetch total income.';
          }
        });
    }
  }
}
