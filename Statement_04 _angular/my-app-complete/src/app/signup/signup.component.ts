import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupSubmit(fullName: String, email: String, username: String, password: String) {

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // important
      body: JSON.stringify({
        fullName, email, username, password
      })
    })
      .then(result => result.json())
      .then(result => {
        console.log(result);
        alert("Registration Successfull.. :)")
        window.location.href = "/login"
      })
      .catch((error) => {
        console.log(error);
        alert("problem occured")
        confirm("please confirm that json-server is on")//can use alert also (or can ommit this)
      })

    return false; // works same like event.prevendDefault()
  }
}
