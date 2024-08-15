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
  selector: 'app-delete-income',
  templateUrl: './delete-income.component.html',
  styleUrls: ['./delete-income.component.css']
})
export class DeleteIncomeComponent implements OnInit {
  deleteIncomeForm: FormGroup;
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.deleteIncomeForm = this.fb.group({
      cnic: ['', [Validators.required, cnicValidator]],
      taskName: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onDelete(): void {
    if (this.deleteIncomeForm.valid) {
      const { cnic, taskName, date } = this.deleteIncomeForm.value;
      console.log('Deleting Income Record:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Task Name:', taskName);
      console.log('Submitted Date:', date);

      // Make API call to delete income record
      this.http.post('http://localhost:3000/api/finance/deleteincome', {
        CNIC: cnic,
        TaskName: taskName,
        Date: date
      }).subscribe({
        next: (response: any) => {
          console.log('Income record deleted successfully!', response);
          this.message = 'Income record deleted successfully!';
          this.deleteIncomeForm.reset(); // Reset the form after successful deletion
        },
        error: (error) => {
          console.error('Failed to delete income record', error);
          this.message = error.error.message || 'Failed to delete income record';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}

