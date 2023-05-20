import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [];

  constructor() { }

  registerUser(name: string, email: string, password: string) {
    // Create a user object and push it to the users array
    const user = {
      name: name,
      email: email,
      password: password
    };
    this.users.push(user);
  }

  getCurrentUser() {
    // Implement your logic to get the current user based on authentication
    // For this example, simply return the first user in the array
    return this.users[0];
  }
}
