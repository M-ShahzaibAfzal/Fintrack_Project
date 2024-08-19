import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Custom validator for CNIC (13-digit number without dashes)
function cnicValidator(control: any) {
  const value = control.value;
  const cnicRegex = /^\d{13}$/;
  if (!value) {
    return null;
  }
  if (cnicRegex.test(value)) {
    return null;
  }
  return { invalidCnic: true };
}

@Component({
  selector: 'app-monthly-income-summary',
  templateUrl: './monthly-income-summary.component.html',
  styleUrls: ['./monthly-income-summary.component.css']
})
export class MonthlyIncomeSummaryComponent implements OnInit {
  incomeSummaryForm: FormGroup;
  incomeRecords: any[] = [];
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form group with controls and validators
    this.incomeSummaryForm = this.fb.group({
      cnic: ['', [Validators.required, cnicValidator]], // Ensure the form control name matches the template
      month: [''] // No validation for month
    });
  }

  ngOnInit(): void {}

  getMonthlyIncomeSummary(): void {
    if (this.incomeSummaryForm.valid) {
      const { cnic, month } = this.incomeSummaryForm.value;
      console.log('Fetching Monthly Income Summary:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Month:', month);

      // Make API call to get monthly income summary
      const url = `/api/finance/getMonthlyIncomeSummary/${cnic}/${month}`;
      this.http.get<any[]>(url).subscribe({
        next: (data) => {
          console.log('Income records retrieved successfully!', data);
          this.incomeRecords = data;
          this.message = ''; // Clear any previous error messages
        },
        error: (error) => {
          console.error('Failed to retrieve income records', error);
          this.message = error.error.message || 'Failed to retrieve income records';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
