import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   credentials = {
    emailAddress: "",
    password: ""
  }

  constructor(private authServive: AuthService) {}

  loginUser() {
    this.authServive.loginRequest(this.credentials)
  }

}
