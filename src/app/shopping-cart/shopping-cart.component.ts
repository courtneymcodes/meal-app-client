import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';

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

  //array of ingredients (as objects) added to cart 
  addedIngredientsArr: any = []

  constructor(private http: HttpClient, private cartService: CartService, private ingredientService: IngredientService, private router: Router) {}

  ngOnInit() {
    //navigate to landing page if user not logged in
    if (localStorage.getItem('jwt') == null){
      this.router.navigate([''])
    }
    //get cart and store. Cart already created from account home
    this.cartService.getUserCart().subscribe((response:any) => {
      this.cart = response.data
      //console.log(this.cart.items)

      //Check if cart has items in it. If so, add existing items to array so they display on the page
      if (this.cart.items) {
        for (let item of this.cart.items) {
          this.addedIngredientsArr.push(item)
          //console.log(this.addedIngredientsArr)
        }
      }
    })
  }

  //updateCart() {
    //makes request to get users cart and stores it 
    //this.cartService.getUserCart().subscribe((response:any) => {
     // this.cart = response
    //})
  //}

  
  addIngredient(ingredient:any){
    //add ingredient from user by making post request and passing in the ingredient from user input and the cart's id
    this.ingredientService.addIngredient(ingredient, this.cart.id).subscribe((response:any) => {
      //console.log(response.data)
      this.addedIngredientsArr.push(response.data) //add the reponse object (which is the added ingredient as an object) to addedIngredientsArr so that it displays on the page
      this.ingredient.name = ''  //this clears out the text in input textbox
   })
  }


  deleteIngredient(ingredientId:any, cartId: string){
  //make delete request passing in the id of the clicked on ingredient and the user's cart id 
  this.ingredientService.deleteIngredient(ingredientId, this.cart.id).subscribe((response) => {
    console.log(response)

    //remove from the deleted ingredient object from the addedIngredientsArr so it is no longer displayed on the page
    
    //find the object whose id (key) has a value matching ingredientId
    for (let i = 0; i < this.addedIngredientsArr.length; i++) { //iterate of the array of ingredients objects
      if (this.addedIngredientsArr[i].id == ingredientId) { //if the object at index i has the id matching ingredientId (item clicked on)
        this.addedIngredientsArr.splice(i,1)  //remove the ingredient object from the array (splice 1 item starting at index i)
      }
    }
  })
}


}
