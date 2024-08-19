import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-saving-amount',
  templateUrl: './add-saving-amount.component.html',
  styleUrls: ['./add-saving-amount.component.css']
})
export class AddSavingAmountComponent implements OnInit {
  addSavingAmountForm: FormGroup;
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {
    this.addSavingAmountForm = this.fb.group({
      CNIC: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      AmtAdded: ['', [Validators.required, Validators.min(1)]],
      AmtDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addSavingAmountForm.valid) {
      const { CNIC, AmtAdded, AmtDate } = this.addSavingAmountForm.value;

      // Make API call to add saving amount
      this.http.post('http://localhost:10000/api/finance/addSavingAmt', {
        CNIC: CNIC,
        AmtAdded: AmtAdded,
        AmtDate: AmtDate
      }).subscribe({
        next: (response: any) => {
          console.log('Saving amount added successfully!', response);
          this.message = 'Saving amount added successfully!';
          this.addSavingAmountForm.reset(); // Reset the form after successful submission
        },
        error: (error) => {
          console.error('Failed to add saving amount', error);
          this.message = error.error.message || 'Failed to add saving amount';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}

