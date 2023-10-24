import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    // this.cartService.createCart()
    // .subscribe((response:any) => {
    //   console.log(response)
    // })

    this.cartService.getUserCart()
    .subscribe((response:any) => {
      console.log(response)
    })
  }


  }

