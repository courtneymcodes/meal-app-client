import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit {
recipeList: any
cartObject:any

  constructor(private recipeService: RecipeService, private cartService: CartService, private dataService: DataService) {
    this.cartObject = this.dataService.getCartData();
  }

  ngOnInit():void {
    //get all user recipes
    this.recipeService.getAllRecipes().subscribe((response:any) => {
      this.recipeList = response.data  //store data from response to recipeList
      this.dataService.setRecipeListData(this.recipeList)  //update recipeList in data service
      //console.log(response)
      console.log(this.recipeList)
    })

    //get request to get user's cart
    this.cartService.getUserCart().subscribe((response:any) => {
      //console.log(response)
      this.cartObject = response
      this.dataService.setCartData(this.cartObject)  //update cart in data service

      //only create a cart if it doesn't exist yet
      if(!this.cartObject){  
        this.cartService.createCart().subscribe((response:any) => {
          console.log(response)
          
        })
      }
    })


  }
}
