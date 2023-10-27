import { Component, Input, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss']
})
export class ShowRecipeComponent implements OnInit{
  @Input() recipe: any
  responseObject: any 
  ingredient = {
    name: ''
  }
  ingredientName: any

  constructor(private recipeService: RecipeService, private ingredientsServie: IngredientService) {}

  ngOnInit() {
    console.log( this.recipe)
  }

  // save the recipe from the api to user's favorites list
  saveRecipe(ingredient: any) {
    //creates the recipe with the object from api (but not the ingredients)
    this.recipeService.createRecipe(this.recipe).subscribe((response) => {
      this.responseObject = response
      console.log(this.responseObject?.data?.ingredients[0])

      // iteraate through the ingredients array from api. For each object in the array, make a post request to add each ingredient to the recipe
      for (let i = 0; i < this.responseObject?.data.ingredients.length; i ++ ){
       this.ingredientName = this.responseObject?.data.ingredients[i].name
        //console.log(this.ingredientName)
        this.ingredient.name = this.ingredientName
        this.ingredientsServie.addRecipeIngredient(ingredient, this.responseObject?.data.id).subscribe((response) => {
          console.log(response)
        })
      }

    })
  }

}
