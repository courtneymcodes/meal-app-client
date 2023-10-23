import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(private http: HttpClient) {}

  getShoppingListItems() {
    this.http.get('http://localhost:9095/api/cart/1/ingredients/')
    .subscribe((response) => {
      console.log(response)
    })
  }
}
