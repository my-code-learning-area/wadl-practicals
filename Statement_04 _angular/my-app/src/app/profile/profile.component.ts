import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any

  constructor() {
    const userID: any = localStorage.getItem("userID")

    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        const userDetails: any = result.find((user: any) => {
          return user.id == userID
        })

        if (userDetails) { // user exists
          this.user = userDetails;
        } else { // user not present
          // alert("invalid credentials    :(")
          window.location.href = "/login"
        }
      })
      .catch(error => {
        console.log('error', error)
        alert("Problem to get user   :(")
        confirm("Please confirm that you have started the json-server  `json-server --watch db.json`")
      });
  }
}
