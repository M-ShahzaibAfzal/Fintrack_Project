import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sort-expense-by-date',
  templateUrl: './sort-expense-by-date.component.html',
  styleUrls: ['./sort-expense-by-date.component.css']
})
export class SortExpenseByDateComponent implements OnInit {
  sortExpenseForm: FormGroup;
  expenses: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sortExpenseForm = this.fb.group({
      CNIC: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.sortExpenseForm.valid) {
      const { CNIC } = this.sortExpenseForm.value;

      // Make API call to get sorted expenses
      this.http.get(`http://localhost:10000/sortExpensesByDate`, {
        params: { CNIC: CNIC }
      }).subscribe({
        next: (response: any) => {
          console.log('Expenses sorted by date fetched successfully!', response);
          this.expenses = response.expenses;
          this.message = response.message;
        },
        error: (error) => {
          console.error('Failed to fetch sorted expenses', error);
          this.message = error.error.message || 'Failed to fetch sorted expenses';
          this.expenses = [];
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}

