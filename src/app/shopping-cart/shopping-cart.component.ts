import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getShoppingListItems() {
    this.http.get('http://localhost:9095/api/cart/1/ingredients/', this.authService.headers)
    .subscribe((response) => {
      console.log(response)
    })
  }
}
