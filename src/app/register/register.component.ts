import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string = ''
  emailAddress: string = '';
  password: string = '';

  onSubmit() {
    console.log("Form data: ", this.name, this.emailAddress, this.password)
  }
}
