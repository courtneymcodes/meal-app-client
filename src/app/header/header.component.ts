import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  signOut() {
    console.log(localStorage.getItem('jwt'))
    //remove jwt token from local storage
    localStorage.removeItem('jwt')
    //navigate back to landing page
    this.router.navigate(['/'])
    
    console.log(localStorage.getItem('jwt'))
}

}
