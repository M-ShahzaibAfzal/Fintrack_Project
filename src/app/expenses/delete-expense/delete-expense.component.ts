import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-expense',
  templateUrl: './delete-expense.component.html',
  styleUrls: ['./delete-expense.component.css']
})
export class DeleteExpenseComponent implements OnInit {
  deleteExpenseForm: FormGroup;
  message: string = ''; 
 // To display success or error messages

  private apiUrl = 'http://localhost:10000/api/finance/deleteExpense';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.deleteExpenseForm = this.fb.group({
      cnic: ['', [Validators.required, this.cnicValidator]],
      itemPurchased: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  cnicValidator(control: any) {
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

  onDelete(): void {
    if (this.deleteExpenseForm.valid) {
      const { cnic, itemPurchased, date } = this.deleteExpenseForm.value;
      console.log('Deleting Expense Record:');
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Item Purchased:', itemPurchased);
      console.log('Submitted Date:', date);

      this.http.post(this.apiUrl, {
        CNIC: cnic,
        ItemPurchased: itemPurchased,
        Date: date
      }).subscribe(
        (response: any) => {
          console.log('Expense record deleted successfully!', response);
          this.message = 'Expense record deleted successfully!';
          this.deleteExpenseForm.reset(); // Reset the form after successful deletion
        },
        (error) => {
          console.error('Failed to delete expense record', error);
          this.message = error.error.message || 'Failed to delete expense record';
        }
      );
    } else {
      console.log('Form is invalid');
      this.message = 'Form is invalid. Please fill out all required fields correctly.';
    }
  }
}

