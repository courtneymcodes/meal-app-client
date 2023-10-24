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
    console.log(typeof response.jwt)
    let token = response.jwt 
    localStorage.setItem('jwt', token)  //store to local storage
    console.log(typeof token)
  })
  }
}

