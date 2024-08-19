import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-income-category',
  templateUrl: './get-income-category.component.html',
  styleUrls: ['./get-income-category.component.css']
})
export class GetIncomeCategoryComponent implements OnInit {
  incomeCategoryForm: FormGroup;
  freelanceIncome: any[] = [];
  salaryIncome: any[] = [];
  investmentIncome: any[] = [];
  othersIncome: any[] = [];
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.incomeCategoryForm = this.fb.group({
      cnic: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]] // CNIC must be a 13-digit number
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.incomeCategoryForm.valid) {
      const { cnic } = this.incomeCategoryForm.value;
      console.log('Submitting Get Income Category form', { cnic });

      this.http.get(`/api/finance/getIncomeCategory/${cnic}`).subscribe({
        next: (response: any) => {
          console.log('Income categories fetched successfully', response);
          this.freelanceIncome = response.freelanceIncome;
          this.salaryIncome = response.salaryIncome;
          this.investmentIncome = response.investmentIncome;
          this.othersIncome = response.othersIncome;
          this.message = response.message;
        },
        error: (error) => {
          console.error('Error fetching income categories', error);
          this.message = error.error.message || 'Failed to fetch income categories.';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Please enter a valid CNIC.';
    }
  }
}

