import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  loginUser(email: string, password: string) {
    // Implement your login logic here
    // Set isLoggedIn to true if login is successful
    this.isLoggedIn = true;
  }
}
