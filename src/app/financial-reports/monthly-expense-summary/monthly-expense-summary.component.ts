import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Custom validator for CNIC (16-digit number without dashes)
function cnicValidator(control: any) {
  const value = control.value;
  const cnicRegex = /^\d{16}$/;
  if (!value) {
    return null;
  }
  if (cnicRegex.test(value)) {
    return null;
  }
  return { invalidCnic: true };
}

@Component({
  selector: 'app-monthly-expense-summary',
  templateUrl: './monthly-expense-summary.component.html',
  styleUrls: ['./monthly-expense-summary.component.css']
})
export class MonthlyExpenseSummaryComponent implements OnInit {
  expenseSummaryForm: FormGroup;
  expenseRecords: any[] = [];
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form group with controls and validators
    this.expenseSummaryForm = this.fb.group({
      cnic: ['', [Validators.required, cnicValidator]],
      month: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}$/)]], // YYYY-MM format
    });
  }

  ngOnInit(): void {}

  getMonthlyExpenseSummary(): void {
    if (this.expenseSummaryForm.valid) {
      const { cnic, month } = this.expenseSummaryForm.value;
      console.log('Fetching Monthly Expense Summary:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Month:', month);

      // Make API call to get monthly expense summary
      const url = `/api/getMonthlyExpenseSummary/${cnic}/${month}`;
      this.http.get<any[]>(url).subscribe({
        next: (data) => {
          console.log('Expense records retrieved successfully!', data);
          this.expenseRecords = data;
          this.message = ''; // Clear any previous error messages
        },
        error: (error) => {
          console.error('Failed to retrieve expense records', error);
          this.message = error.error.message || 'Failed to retrieve expense records';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
