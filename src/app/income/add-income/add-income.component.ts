import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  addIncomeForm: FormGroup;
  categories = [
    { label: 'Salary', value: 'salary' },
    { label: 'Freelance', value: 'freelance' },
    { label: 'Investments', value: 'investments' },
    { label: 'Other', value: 'other' }
  ];
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initializing the form with form controls and validators
    this.addIncomeForm = this.fb.group({
      cnic: ['', [Validators.required]],
      source: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      date: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addIncomeForm.valid) {
      const formData = this.addIncomeForm.value;
      console.log('Submitted Income Data:', formData);

      // Make API call to add income record
      this.http.post('http://localhost:10000/api/finance/Addincome', formData)
        .subscribe({
          next: (response: any) => {
            console.log('Income added successfully!', response);
            this.message = 'Income added successfully!';
            this.addIncomeForm.reset();  // Reset the form after successful submission
          },
          error: (error) => {
            console.error('Failed to add income.', error);
            this.message = error.error.message || 'Failed to add income.';
          }
        });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
