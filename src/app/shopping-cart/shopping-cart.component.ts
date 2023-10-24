import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: any
  ingredient = {
    name: ''
  }
  
  ingredientObject:any

  constructor(private http: HttpClient, private cartService: CartService, private ingredientService: IngredientService) {}

  ngOnInit() {
    this.cartService.getUserCart().subscribe((response:any) => {
      console.log(response)
      this.cart = response

      //only create a cart if it doesn't exist yet
      if(!this.cart){  
        this.cartService.createCart().subscribe((response:any) => {
          console.log(response)
        })
      }
    })
   
  }

  addIngredient(ingredient:any){
    console.log(ingredient)
    this.ingredientService.addIngredient(ingredient).subscribe((response:any) => {
      console.log(response)
    })
  }

  }

