import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formSubmit(username: String, fullName: String, email: String, password: String) {

    const raw: any = JSON.stringify({ username, fullName, email, password });

    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: raw
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        alert("User Registered Successfully   :)")
        window.location.href = "/login"
      })
      .catch(error => {
        console.log('error', error)
        alert("Problem to register user   :(")
        confirm("Please confirm that you have started the json-server  `json-server --watch db.json`")
      });

    return false; // returning false will not refresh the page once the form is submited (it is like e.preventDefault)
  }

}
