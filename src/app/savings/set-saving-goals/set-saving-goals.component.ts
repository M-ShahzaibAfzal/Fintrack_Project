import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Custom validator for CNIC (13-digit number)
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
  selector: 'app-set-saving-goals',
  templateUrl: './set-saving-goals.component.html',
  styleUrls: ['./set-saving-goals.component.css']
})
export class SetSavingGoalsComponent implements OnInit {
  savingGoalForm: FormGroup;
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.savingGoalForm = this.fb.group({
      CNIC: ['', [Validators.required, cnicValidator]],
      TargetAmount: ['', [Validators.required, Validators.min(1)]],
      TargetDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.savingGoalForm.valid) {
      const { CNIC, TargetAmount, TargetDate } = this.savingGoalForm.value;
      console.log('Setting Saving Goal:');
      console.log('Submitted CNIC:', CNIC);
      console.log('Submitted Target Amount:', TargetAmount);
      console.log('Submitted Target Date:', TargetDate);

      // Make API call to set saving goal
      this.http.post(`http://localhost:10000/api/finance/setSavingGoals/${CNIC}`, {
        TargetAmount: TargetAmount,
        TargetDate: TargetDate
      }).subscribe({
        next: (response: any) => {
          console.log('Saving goal set successfully!', response);
          this.message = 'Saving goal set successfully!';
          this.savingGoalForm.reset(); // Reset the form after successful submission
        },
        error: (error) => {
          console.error('Failed to set saving goal', error);
          this.message = error.error.message || 'Failed to set saving goal';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
