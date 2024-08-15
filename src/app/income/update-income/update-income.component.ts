import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.css']
})
export class UpdateIncomeComponent implements OnInit {
  updateIncomeForm: FormGroup;
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.updateIncomeForm = this.fb.group({
      cnic: ['', [Validators.required, cnicValidator]],
      taskName: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Assuming amount is numeric
      date: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onUpdate(): void {
    if (this.updateIncomeForm.valid) {
      const { cnic, taskName, source, amount, date, category } = this.updateIncomeForm.value;
      console.log('Updating Income Record:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Task Name:', taskName);
      console.log('Submitted Source:', source);
      console.log('Submitted Amount:', amount);
      console.log('Submitted Date:', date);
      console.log('Submitted Category:', category);

      // Make API call to update income record
      this.http.put(`http://localhost:3000/api/finance/updateincome/${cnic}/${taskName}/${date}`, {
        taskName,
        Source: source,
        Amount: amount,
        date,
        Category: category
      }).subscribe({
        next: (response: any) => {
          console.log('Income record updated successfully!', response);
          this.message = 'Income record updated successfully!';
          this.updateIncomeForm.reset(); // Reset the form after successful update
        },
        error: (error) => {
          console.error('Failed to update income record', error);
          this.message = error.error.message || 'Failed to update income record';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
