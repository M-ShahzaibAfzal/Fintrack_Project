// login-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {jwtDecode }from 'jwt-decode';


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
    private router: Router,
    
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Submitting login form', { email, password });

      this.http.post('http://localhost:8000/api/auth/SignIn', {
        Email: email,
        Password: password
      }).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);

          localStorage.setItem('accessToken', response.token);

          try {
            const token = response.token;
            const decodedToken: any = jwtDecode(token);

            
            
            
            

            this.router.navigate(['/home'], {
              queryParams: { fullName: decodedToken.fullName }
            });
          } catch (error) {
            console.error('Error decoding token', error);
          }
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
