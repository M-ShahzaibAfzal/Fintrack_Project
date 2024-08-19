import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saving-records',
  templateUrl: './saving-records.component.html',
  styleUrls: ['./saving-records.component.css']
})
export class SavingRecordsComponent implements OnInit {
  savingRecordForm: FormGroup;
  records: any[] = [];
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.savingRecordForm = this.fb.group({
      CNIC: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.savingRecordForm.valid) {
      const { CNIC } = this.savingRecordForm.value;

      // Make API call to get saving records
      this.http.get(`http://localhost:10000/api/finance/getSavingRecord/${CNIC}`)
        
      .subscribe({
        next: (response: any) => {
          console.log('Saving records fetched successfully!', response);
          this.records = response.records; // Store records
          this.message = response.message;
        },
        error: (error) => {
          console.error('Failed to fetch saving records', error);
          this.message = error.error.message || 'Failed to fetch saving records';
          this.records = []; // Clear records on error
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
