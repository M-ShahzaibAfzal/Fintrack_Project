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
      cnic: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.totalExpensesForm.valid) {
      const { cnic } = this.totalExpensesForm.value;
      console.log('CNIC submitted:', cnic); // Debugging log

      // Make GET request with CNIC as a route parameter
      this.http.get(`http://localhost:10000/api/finance/UserTotalExpense/${cnic}`)
        .subscribe({
          next: (response: any) => {
            console.log('Response received:', response); // Debugging log
            this.records = response.Record;
            this.message = response.message;
          },
          error: (error) => {
            console.error('Error received:', error); // Debugging log
            this.message = error.error.message || 'Failed to fetch total expenses.';
          }
        });
    }
  }

  downloadCSV(): void {
    if (this.totalExpensesForm.valid) {
      const { cnic } = this.totalExpensesForm.value;
      this.http.get(`http://localhost:10000/api/GetExpenseRecordInCSV/${cnic}`, {
        responseType: 'blob'  // This explicitly tells Angular to expect a blob response
      }).subscribe({
        next: (data: Blob) => {  // Here we make sure that 'data' is of type Blob
          const blob = new Blob([data], { type: 'text/csv' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.setAttribute('style', 'display:none;');
          document.body.appendChild(a);
          a.href = url;
          a.download = 'ExpenseRecord.csv';
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove();
        },
        error: (error) => {
          this.message = error.error.message || 'Failed to download CSV.';
        }
      });
    }
  }
}
