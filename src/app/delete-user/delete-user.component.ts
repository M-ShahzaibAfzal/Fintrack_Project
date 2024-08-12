import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  deleteForm: FormGroup;
  message!: string;  // Use non-null assertion

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.deleteForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.deleteForm.valid) {
      const { userName, email, password } = this.deleteForm.value;
      console.log(JSON.stringify(this.deleteForm.value, null, 2));
      console.log('Submitted Username:', userName);
      console.log('Submitted Email:', email);
      console.log('Submitted Password:', password);

      // Make API call to backend
      this.http.post('http://localhost:8000/api/auth/DeleteUser/shahzaibafzal', {
        Email: email,
        Password: password
      }).subscribe({
        next: (response: any) => {
          console.log('User deletion successful', response);
          
          this.message = response.message;  // Set message on success
          // Optionally, redirect to a different page
          this.router.navigate(['/home']); // Adjust route as needed
        },
        error: (error) => {
          console.error('User deletion failed', error);
          this.message = 'Error deleting user';  // Set message on error
        }
      });
    }
  }
}

