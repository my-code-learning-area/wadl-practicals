import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  logindata(login: FormGroup) {
    this.http.get<any>("http://localhost:3000/Signup_Users")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.login.value.email && a.password === this.login.value.password
        });

        if (user) {
          localStorage.setItem("user", user.id)
          alert('Login Successful')
          this.login.reset();
          this.router.navigate(['dashboard'])
        }
        else {
          alert('Login Failed')
        }
      }, err => {
        alert('Something went wrong!!')
      })
  }
}
