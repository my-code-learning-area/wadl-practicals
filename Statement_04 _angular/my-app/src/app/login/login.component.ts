import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formSubmit(username: String, password: String) {

    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        const user: any = result.find((user: any) => {
          return user.username == username && user.password == password
        })

        if (user) { // user exists
          alert("Login Successfull     :)")
          window.localStorage.setItem("userID", user.id)
          window.location.href = "/profile"
        } else { // user not present
          alert("invalid credentials    :(")
        }
      })
      .catch(error => {
        console.log('error', error)
        alert("Problem to login user   :(")
        confirm("Please confirm that you have started the json-server  `json-server --watch db.json`")
      });

    return false; // this is for (to not refresh the page after form submit) .. it is like (e.preventDefault())
  }
}
