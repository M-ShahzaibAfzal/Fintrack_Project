import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Custom validator for CNIC (16-digit number without dashes)
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
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {
  updateExpenseForm: FormGroup;
  message: string = ''; // To display success or error messages

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.updateExpenseForm = this.fb.group({
      cnic: ['', [Validators.required, cnicValidator]],
      itemPurchased: ['', Validators.required],
      date: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['', Validators.required],
      newItemPurchased: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onUpdate(): void {
    if (this.updateExpenseForm.valid) {
      const { cnic, itemPurchased, date, amount, category, newItemPurchased } = this.updateExpenseForm.value;
      console.log('Updating Expense Record:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Item Purchased:', itemPurchased);
      console.log('Submitted Date:', date);
      console.log('Submitted Amount:', amount);
      console.log('Submitted Category:', category);
      console.log('New Item Purchased:', newItemPurchased);

      // Make API call to update expense record
      this.http.put(`http://localhost:10000/api/finance/updateExpenseRecord/${cnic}/${itemPurchased}/${date}`, {
        Amount: amount,
        date: date,
        Category: category,
        itemPurchased: newItemPurchased
      }).subscribe({
        next: (response: any) => {
          console.log('Expense record updated successfully!', response);
          this.message = 'Expense record updated successfully!';
          this.updateExpenseForm.reset(); // Reset the form after successful update
        },
        error: (error) => {
          console.error('Failed to update expense record', error);
          this.message = error.error.message || 'Failed to update expense record';
        }
      });
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}
