import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.css']
})
export class AdminVerificationComponent implements OnInit {
  verificationForm: FormGroup;
  message: string = ''; // Feedback message

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.verificationForm = this.fb.group({
      verificationCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
    });
  }

  ngOnInit(): void {}

  onVerify(): void {
    if (this.verificationForm.valid) {
      const { verificationCode } = this.verificationForm.value;

      // Assuming the backend has an endpoint for verification
      this.http.post('http://localhost:8000/api/admin/verify', { verificationCode })
        .subscribe({
          next: (response: any) => {
            if (response.verified) {
              this.message = 'Verification successful! Redirecting...';
              setTimeout(() => {
                this.router.navigate(['/admin-login']);
              }, 2000);
            } else {
              this.message = 'Verification failed. Please try again.';
            }
          },
          error: (error) => {
            console.error('Verification failed', error);
            this.message = 'An error occurred. Please try again later.';
          }
        });
    } else {
      this.message = 'Please enter a valid verification code.';
    }
  }
}
