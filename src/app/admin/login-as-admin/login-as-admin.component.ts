import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-as-admin',
  templateUrl: './login-as-admin.component.html',
  styleUrls: ['./login-as-admin.component.css']
})
export class LoginAsAdminComponent {
  adminLoginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.adminLoginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onAdminSubmit() {
    if (this.adminLoginForm.valid) {
      const email = this.adminLoginForm.get('email')?.value;
      const password = this.adminLoginForm.get('password')?.value;
      
      // Print email and password to the console
      console.log('Email:', email);
      console.log('Password:', password);

      // Prepare the data to be sent to the API
      const loginData = {
        email: email,
        password: password
      };

      // Make the HTTP POST request
      this.http.post('https://your-api-endpoint.com/admin/login', loginData)
        .subscribe(
          response => {
            // Handle successful response
            console.log('Login successful:', response);
          },
          error => {
            // Handle error response
            console.error('Login failed:', error);
          }
        );
    }
  }
}
