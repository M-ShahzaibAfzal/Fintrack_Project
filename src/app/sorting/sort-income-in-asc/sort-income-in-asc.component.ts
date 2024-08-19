import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sort-income-in-asc',
  templateUrl: './sort-income-in-asc.component.html',
  styleUrls: ['./sort-income-in-asc.component.css']
})
export class SortIncomeInAscComponent implements OnInit {
  sortIncomeInAscForm: FormGroup;
  incomeRecords: any[] = []; // Initialize as an empty array
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sortIncomeInAscForm = this.fb.group({
      CNIC: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.sortIncomeInAscForm.valid) {
      const { CNIC } = this.sortIncomeInAscForm.value;

      // Make the HTTP GET request to the backend API
      this.http.get(`http://localhost:10000/api/finance/sortIncomeInAsc/${CNIC}`)
      .subscribe({
        next: (response: any) => {
          this.incomeRecords = response.records;  // Assuming the backend returns { message, records }
          this.message = response.message;  // Store the message to display it in the UI
          console.log('Income Records:', this.incomeRecords);
        },
        error: (err) => {
          this.message = err.error.message || 'An error occurred while fetching income records.';
          console.error('Error fetching income records:', err);
        }
      });
    }
  }
}
