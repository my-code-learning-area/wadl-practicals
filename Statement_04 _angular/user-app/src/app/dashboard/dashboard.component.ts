import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any;

  constructor(private http: HttpClient, private router: Router) {
    http.get<any>("http://localhost:3000/Signup_Users").forEach((users) => {
      const userID = localStorage.getItem("user") || 0;

      if (userID) {
        this.user = users.find((user: any) => {
          return user.id == userID
        });
        console.log(this.user)
      } else {
        router.navigate(['login'])
      }
    })
  }

  public logout() {
    localStorage.removeItem("user")
    this.router.navigate(['login'])
  }

}
