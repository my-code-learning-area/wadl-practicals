import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginSubmit(username: String, password: String) {

    fetch("http://localhost:3000/users")
      .then(result => result.json())
      .then(result => {
        const user: any = result.find((user: any) => {
          return user.username == username && user.password == password
        });

        if (user) { // user found
          alert("Login Successfull   :)")
          localStorage.setItem("user", JSON.stringify(user))
          window.location.href = "/profile"
        } else { // user not found
          alert("User Not Found OR Wrong Credentials    :(")
        }
      })
      .catch(error => {
        alert("problem occured")
        confirm("please confirm that json-server is on")//can use alert also (or can ommit this)
      })

    return false;
  }
}
