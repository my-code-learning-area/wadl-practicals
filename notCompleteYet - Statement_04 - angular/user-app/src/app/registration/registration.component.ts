import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private userService: UserService) { }

  register() {
    this.userService.registerUser(this.name, this.email, this.password);
  }
}
