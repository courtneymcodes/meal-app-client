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
    console.log(this.credentials)
   this.authServive.loginUser(this.credentials)
   .subscribe((response:any) => {
    console.log(response.jwt)
    let token = JSON.stringify(response.jwt)  //convert object to string
    localStorage.setItem('jwt', token)  //store to local storage
  })
  }
}
