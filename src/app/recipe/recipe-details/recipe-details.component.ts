import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit{
 recipeId: string | null = ''
 shownRecipe:any

 ingredientToAddToList = {
  id: '',
  name: ''
 }

 cart: any


  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private ingredientService: IngredientService, private cartService: CartService){}

  // add ingredient to cart when clicked
  addItemToCart(item:any) {
    this.ingredientToAddToList.name = item.name
    this.ingredientToAddToList.id = item.id
    console.log(this.ingredientToAddToList)

    //make a post request to add ingredient from recipe to shopping list, passing in ingredient object and cart id
    this.ingredientService.addIngredient(item, this.cart?.data.id).subscribe((response) => {
      console.log(response)
    })
  }

  ngOnInit(){
    //store the id of the clicked on recipe
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('id')
      //console.log(this.recipeId)
      
      //find recipe by its id by making a get request via recipeService
      this.recipeService.getRecipeById(this.recipeId).subscribe((response) => {
        this.shownRecipe = response
        //console.log(this.shownRecipe)
      })
    })


    //make a requst to get and store cart (to get cart id needed for addItemToCart() method)

    this.cartService.getUserCart().subscribe((response) => {
      this.cart = response
    })
  }

}
