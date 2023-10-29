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
    //if user is not logged in (jwt not saved in local storage) navigate to landing page
    if (localStorage.getItem('jwt') == null){
      this.router.navigate([''])
    }

    // call getAllRecipes on recipeService to make post request to /api/recipes/ that will get all of the recipes in users favorites list
    this.recipeService.getAllRecipes().subscribe((response:any) => {
      this.recipeList = response.data  //recipes list is recived and stored 
      //console.log(this.recipeList)
   })

      //create a cartif it doesn't exist 
      // if(!this.cart){  
      //   console.log(this.cart)
      //   this.cartService.createCart().subscribe((response:any) => {
      //     console.log(response)
      //   })
      // }

         //get make request to retrive user's cart
    // this.cartService.getUserCart().subscribe((response:any) => {
    //   this.cart = response
    //   console.log(this.cart)
    // })



    //Make a request to get the user's cart, if cart exists it is stored. If the cart doesn't exist it is created and stored
    this.cartService.getUserCart().subscribe((response: any) => {
      this.cart = response
      //console.log(response)
    },
    (error) => {
      //if response is 404 error (cart not found)
      if (error.status === 404) {
        //create cart and store
        this.cartService.createCart().subscribe((repsonse:any) => {
          this.cart = repsonse
          console.log(this.cart)
        })
      }
    })

  }

}
