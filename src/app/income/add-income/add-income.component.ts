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
  
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initializing the form with form controls and validators
    this.addIncomeForm = this.fb.group({
      cnic: ['', [Validators.required]],
      taskname:['',[Validators.required]],
      source: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      date: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addIncomeForm.valid) {
      const {cnic,taskname,source,amount,date,category} =this.addIncomeForm.value;
      console.log(this.addIncomeForm.value);
      console.log('Submitted Income Data:');
      console.log('Deleting Income Record:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Task Name:', taskname);
      console.log('Submitted Date:', date);
      console.log('Submitted Source:', source);
      console.log('Submitted Category:', category);




      // Make API call to add income record
      this.http.post('http://localhost:10000/api/finance/AddIncome', {
          CNIC:cnic,
          TaskName:taskname,
          Source:source,
          Amount:amount,
          Date:date,
          Category:category,




      })
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
