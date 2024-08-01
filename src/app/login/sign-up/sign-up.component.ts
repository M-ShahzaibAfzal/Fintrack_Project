import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { firstName, lastName, email, password } = this.signUpForm.value;
      console.log(JSON.stringify(this.signUpForm.value, null, 2));
      console.log('Submitted First Name:', firstName);
      console.log('Submitted Last Name:', lastName);
      console.log('Submitted Email:', email);
      console.log('Submitted Password:', password);
      // Implement sign-up logic here, e.g., call API to create user account
    }
  }
}

