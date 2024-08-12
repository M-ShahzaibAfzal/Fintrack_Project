import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.css']
})
export class SeeUserComponent implements OnInit {
  seeUserForm: FormGroup;
  user: any = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.seeUserForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.seeUserForm.valid) {
      const { username } = this.seeUserForm.value;
      console.log('Submitting see user form', { username });

      this.http.post('http://localhost:8000/api/auth/seeUser', {
        UserName:username,
      }).subscribe({
        next: (response: any) => {
          console.log('User fetched successfully', response);
          this.user = response;
        },
        error: (error) => {
          console.error('Error fetching user details', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
