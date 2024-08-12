import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  adminSignupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.adminSignupForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', ],
      number: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.adminSignupForm.valid) {
      const { firstName, secondName, username, email, password, number } = this.adminSignupForm.value;

      this.http.post('http://localhost:8000/api/auth/admin-register', {
        FirstName: firstName,
        SecondName: secondName,
        UserName: username,
        Email: email,
        Number: number,
        Password: password,
      }).subscribe({
        next: (response: any) => {
          console.log('Admin Signup successful', response);
          localStorage.setItem('username', username);
          this.router.navigate(['/login-as-admin']);
        },
        error: (error: any) => {
          console.error('Admin Signup failed', error);
        }
      });
    }
  }
}

