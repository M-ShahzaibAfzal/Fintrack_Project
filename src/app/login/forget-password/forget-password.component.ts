// forget-password.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  message: string = ''; // Initialize with an empty string

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.forgetPasswordForm.valid) {
      const { email } = this.forgetPasswordForm.value;

      // API call to check if email exists
      this.http.post('http://localhost:3000/api/finance/ForgetPassword', { email })
        .subscribe({
          next: (response: any) => {
            if (response.exists) {
              this.message = 'Email exists. Please check your inbox for further instructions.';
              // Optionally redirect or provide additional instructions here
            } else {
              this.message = 'This account is invalid.';
            }
          },
          error: (error) => {
            console.error('Error checking email', error);
            this.message = 'An error occurred. Please try again.';
          }
        });
    }
  }
}
