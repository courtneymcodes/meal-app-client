import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit {
recipeList: any
cart:any

  constructor(private recipeService: RecipeService, private cartService: CartService, private router: Router) {}

  ngOnInit():void {

    if (localStorage.getItem('jwt') == null){
      this.router.navigate([''])
    }

    this.recipeService.getAllRecipes().subscribe((response:any) => {
      this.recipeList = response.data
      //console.log(response)
      //console.log(this.recipeList)
    })

    //get make request to get user's cart
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
}
