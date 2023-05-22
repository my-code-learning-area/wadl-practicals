import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any

  constructor() {
    const userDetails: any = localStorage.getItem("user")

    if (userDetails) {
      this.user = JSON.parse(userDetails)
    } else {
      window.location.href = "/login"
    }
  }

  logout() {
    localStorage.removeItem("user")
    window.location.href = "/login"
  }
}
