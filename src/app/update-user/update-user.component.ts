import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username:['',Validators.required ],
    //  email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern]], // 5-digit validation
      password: ['', Validators.required] // This will be manually filled
    });
  }

  ngOnInit(): void {}

  onUpdate(): void {
    if (this.updateForm.valid) {
      const { firstName, lastName,username, email,  mobile, password } = this.updateForm.value;

      this.http.post(`http://localhost:8000/api/auth/updateUser`, {
        FirstName: firstName,
        SecondName: lastName,
        Email: email,
       UserName:username,
        Number: mobile,
        Password: password
      }).subscribe({
        next: (response: any) => {
          console.log('User updated successfully', response);
          this.router.navigate(['/home']); // Redirect after successful update
        },
        error: (error) => {
          console.error('Update failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}

