// // src/app/login/verification/verification.component.ts

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-verification',
//   templateUrl: './verification.component.html',
//   styleUrls: ['./verification.component.css']
// })
// export class VerificationComponent implements OnInit {
//   verificationForm: FormGroup;
//   storedUsername: string | null = '';

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.verificationForm = this.fb.group({
//       number: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
//     });
//   }

//   ngOnInit(): void {
//     // Get the stored username from local storage
//     this.storedUsername = localStorage.getItem('username');
//   }

//   onVerify(): void {
//     if (this.verificationForm.valid) {
//       const { number } = this.verificationForm.value;
//       const username = this.storedUsername;

//       // Make API call to verify the number
//       this.http.post('http://localhost:8000/api/auth/verify/abc', {
//         Username:username,
//         enteredCode: number
//       }).subscribe({
//         next: (response: any) => {
//           console.log('Verification successful', response);
//           // Redirect to login page
//           this.router.navigate(['/login']);
//         },
//         error: (error) => {
//           console.error('Verification failed', error);
//           // Optionally show an error message
//         }
//       });
//     } else {
//       console.log('Form is invalid');
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verificationForm: FormGroup;
  storedUsername: string | null = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.verificationForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
    });
  }

  ngOnInit(): void {
    // Get the stored username from local storage
    this.storedUsername = localStorage.getItem('username');
  }

  onVerify(): void {
    if (this.verificationForm.valid) {
      const number = Number(this.verificationForm.get('number')?.value); // Convert to integer
      const username = this.storedUsername;

      // Make API call to verify the number
      this.http.post('http://localhost:8000/api/auth/verify/shahzaibafzal', {
        Username: username,
        enteredCode: number,
      }).subscribe({
        next: (response: any) => {
          console.log('Verification successful', response);
          this.router.navigate(['/see-user']);
          // Redirect to login page
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Verification failed', error);
          // Optionally show an error message
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
