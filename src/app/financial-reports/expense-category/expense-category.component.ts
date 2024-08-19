import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.css']
})
export class ExpenseCategoryComponent implements OnInit {
  expenseCategoryForm: FormGroup;
  totalExpense: number | null = null;
  records: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form group with controls and validators
    this.expenseCategoryForm = this.fb.group({
      cnic: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]], // Ensure 13-digit CNIC
      category: ['', [Validators.required]] // Category is required
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.expenseCategoryForm.valid) {
      const { cnic, category } = this.expenseCategoryForm.value;
      const url = `http://localhost:10000/api/finance/ExpenseCategory/${cnic}/${category}`;

      this.http.get(url).subscribe({
        next: (response: any) => {
          this.totalExpense = response.totalExpense;
          this.records = response.records;
          this.message = ''; // Clear any previous error messages
        },
        error: (error) => {
          this.message = error.error.message || 'Failed to fetch expense records.';
          this.totalExpense = null;
          this.records = [];
        }
      });
    } else {
      this.message = 'Please fill out all required fields correctly.';
    }
  }
}
