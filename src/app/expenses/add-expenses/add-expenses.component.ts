import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {
  addExpenseForm: FormGroup;
  categories = [
    { label: 'Food', value: 'food' },
    { label: 'Transport', value: 'transport' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Other', value: 'other' }
  ];
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initializing the form with form controls and validators
    this.addExpenseForm = this.fb.group({
      cnic: ['', [Validators.required]],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      date: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addExpenseForm.valid) {
      const formData = this.addExpenseForm.value;
      console.log('Submitted Expense Data:', formData);

      // Make API call to add expense record
      this.http.post('http://localhost:10000/api/finance/AddExpenseRecord', formData)
        .subscribe({
          next: (response: any) => {
            console.log('Expense added successfully!', response);
            this.message = 'Expense added successfully!';
            this.addExpenseForm.reset();  // Reset the form after successful submission
          },
          error: (error) => {
            console.error('Failed to add expense.', error);
            this.message = error.error.message || 'Failed to add expense.';
          }
        });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
