import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private email: string | null = null;  // Add email property



 

  setEmail(email: string): void {  // Method to set email
    this.email = email;
  }

  getEmail(): string | null {  // Method to get email
    return this.email;
  }
}
