// login-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Custom validator for email or username
function usernameOrEmailValidator(control: any) {
  const value = control.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
  if (!value) {
    return null;
  }
  if (emailRegex.test(value) || usernameRegex.test(value)) {
    return null;
  }
  return { invalidUsernameOrEmail: true };
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
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, usernameOrEmailValidator]],
      password: ['', [Validators.required, passwordValidator]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Submitting login form', { username, password });

      this.http.post('/api/login', this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          // Save the token in local storage
          localStorage.setItem('accessToken', response.token);
          // Redirect to home page
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed', error);
          // Handle login error
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
