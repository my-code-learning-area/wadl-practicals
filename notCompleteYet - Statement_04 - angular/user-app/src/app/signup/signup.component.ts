import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signup !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      fname: [''],
      number: [''],
      email: [''],
      password: ['']

    })
  }

  signupdata(signup: FormGroup) {
    console.log(this.signup.value);

    this.http.post<any>("http://localhost:3000/Signup_Users", this.signup.value)
      .subscribe(res => {
        alert("Signup Successful");
        this.signup.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Something went wrong")
      })
  }
}
