import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sort-income-in-des',
  templateUrl: './sort-income-in-des.component.html',
  styleUrls: ['./sort-income-in-des.component.css']
})
export class SortIncomeInDesComponent implements OnInit {
  sortIncomeInDesForm: FormGroup;
  incomeRecords: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sortIncomeInDesForm = this.fb.group({
      CNIC: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.sortIncomeInDesForm.valid) {
      const { CNIC } = this.sortIncomeInDesForm.value;

      // Make API call to sort income in descending order
      this.http.get(`http://localhost:10000/api/finance/sortIncomeInDesc`,{
        params: { CNIC: CNIC }
      }).subscribe({
        next: (response: any) => {
          console.log('Income records sorted in descending order fetched successfully!', response);
          this.incomeRecords = response.records;
          this.message = response.message;
        },
        error: (error) => {
          console.error('Failed to fetch sorted income records', error);
          this.message = error.error.message || 'Failed to fetch sorted income records';
          this.incomeRecords = [];
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}

