import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string = ''
  emailAddress: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log("Form data: ", this.name, this.emailAddress, this.password)
  }
}
