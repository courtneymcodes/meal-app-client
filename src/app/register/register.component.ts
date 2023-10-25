import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private authServive: AuthService, private router: Router) {}

  onSubmit() {
    this.authServive.registerUser(this.user).subscribe((response:any) =>{
      console.log(response)

      if ( response != null) {  
        this.router.navigate(['/login'])
      } else {
        // Todo: display error message 
        console.log("login not successful")
      }
    })
  }
}
