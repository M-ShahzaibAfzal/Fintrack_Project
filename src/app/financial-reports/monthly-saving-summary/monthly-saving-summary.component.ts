import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Custom validator for CNIC (13-digit number without dashes)
function cnicValidator(control: any) {
  const value = control.value;
  const cnicRegex = /^\d{13}$/; // Adjusted to 13 digits as per typical CNIC format
  if (!value) {
    return null;
  }
  if (cnicRegex.test(value)) {
    return null;
  }
  return { invalidCnic: true };
}

@Component({
  selector: 'app-monthly-saving-summary',
  templateUrl: './monthly-saving-summary.component.html',
  styleUrls: ['./monthly-saving-summary.component.css']
})
export class MonthlySavingSummaryComponent implements OnInit {
  savingSummaryForm: FormGroup;
  savingRecords: any[] = [];
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form group with controls and validators
    this.savingSummaryForm = this.fb.group({
      cnic: ['', [Validators.required, cnicValidator]],
      month: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}$/)]], // YYYY-MM format
    });
  }

  ngOnInit(): void {}

  getMonthlySavingSummary(): void {
    if (this.savingSummaryForm.valid) {
      const { cnic, month } = this.savingSummaryForm.value;
      console.log('Fetching Monthly Saving Summary:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Month:', month);

      // Make API call to get monthly saving summary
      const url = `/api/getMonthlySavingSummary/${cnic}/${month}`;
      this.http.get<any[]>(url).subscribe({
        next: (data) => {
          console.log('Saving records retrieved successfully!', data);
          this.savingRecords = data;
          this.message = ''; // Clear any previous error messages
        },
        error: (error) => {
          console.error('Failed to retrieve saving records', error);
          this.message = error.error.message || 'Failed to retrieve saving records';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}

