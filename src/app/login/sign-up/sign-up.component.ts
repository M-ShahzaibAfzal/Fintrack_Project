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

// Custom validator for password
function passwordValidator(control: any) {
  const value = control.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!value) {
    return null;
  }
  if (passwordRegex.test(value)) {
    return null;
  }
  return { invalidPassword: true };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cnic: ['', [Validators.required, cnicValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      mobileNumber: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { firstName, lastName, cnic, email, password, mobileNumber } = this.signUpForm.value;
      console.log(JSON.stringify(this.signUpForm.value, null, 2));
      console.log('Submitted First Name:', firstName);
      console.log('Submitted Last Name:', lastName);
      console.log('Submitted CNIC:', cnic);
      console.log('Submitted Email:', email);
      console.log('Submitted Password:', password);
      console.log('Submitted Mobile Number:', mobileNumber);

      // Make API call to backend
      this.http.post('http://localhost:8000/api/auth/register', {
        FirstName: firstName,
        SecondName: lastName,
        CNIC: cnic,
        Email: email,
        Number: mobileNumber,
        Password: password,
      }).subscribe({
        next: (response: any) => {
          console.log('SignUp successful', response);
          // Store username in local storage
          localStorage.setItem('username', cnic);
          // Redirect to verification page
          this.router.navigate(['/verification']);
        },
        error: (error) => {
          console.error('SignUp failed', error);
        }
      });
    }
  }
}

