import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sort-income-by-date',
  templateUrl: './sort-income-by-date.component.html',
  styleUrls: ['./sort-income-by-date.component.css']
})
export class SortIncomeByDateComponent implements OnInit {
  sortIncomeForm: FormGroup;
  income: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sortIncomeForm = this.fb.group({
      CNIC: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.sortIncomeForm.valid) {
      const { CNIC } = this.sortIncomeForm.value;

      // Make API call to sort income by date
      this.http.get(`http://localhost:10000/sortIncomeByDate`, {
        params: { CNIC: CNIC }
      }).subscribe({
        next: (response: any) => {
          console.log('Income sorted by date fetched successfully!', response);
          this.income = response.income;
          this.message = response.message;
        },
        error: (error) => {
          console.error('Failed to fetch sorted income', error);
          this.message = error.error.message || 'Failed to fetch sorted income';
          this.income = [];
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
