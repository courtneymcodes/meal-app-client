import { Component } from '@angular/core';

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

  onSubmit(){
    console.log("Form data: ", this.credentials)
  }
}
