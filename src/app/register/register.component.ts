import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user = {
    name: "",
    emailAddress: "",
    password: ""
  }

  constructor(private http: HttpClient, private authServive: AuthService) {}

  onSubmit() {
    console.log("Form data: ", this.user)
    this.authServive.registerUser(this.user).subscribe((response:any) =>{
      console.log(response)
    })
  }
}
