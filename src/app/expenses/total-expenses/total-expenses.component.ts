import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-total-expenses',
  templateUrl: './total-expenses.component.html',
  styleUrls: ['./total-expenses.component.css']
})
export class TotalExpensesComponent implements OnInit {
  totalExpensesForm: FormGroup;
  records: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.totalExpensesForm = this.fb.group({
      cnic: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.totalExpensesForm.valid) {
      const { cnic } = this.totalExpensesForm.value;
      this.http.post('http://localhost:10000/api/finance/userTotalExpense', { CNIC: cnic })
        .subscribe({
          next: (response: any) => {
            this.records = response.Record;
            this.message = response.message;
          },
          error: (error) => {
            this.message = error.error.message || 'Failed to fetch total expenses.';
          }
        });
    }
  }
}

