import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent {

  //data from add recipe form
  recipe = {
    name: "",
    instructions: "",
    imageUrl: "",
    sourceUrl: "",
  }

  createdRecipe: any  //response object containing recipe object with id

  //data from add ingredient form
  ingredient = {
    name: ''
  }

  addedIngredientsArr: string[] = [] //array to track recipe ingredients added 

  showToggle: boolean = false

  constructor(private recipeService: RecipeService, private router: Router, private ingredientService: IngredientService) {}

  createRecipe(recipe:any){
     this.recipeService.createRecipe(recipe).subscribe((response:any) => {
      this.createdRecipe = response.data

      if (this.createdRecipe) {
        this.showToggle = true
      }
  })
}


addIngredientToRecipe(ingredient: any) {
  console.log(this.createdRecipe.id)
  this.ingredientService.addRecipeIngredient(ingredient, this.createdRecipe.id).subscribe((response: any) => {
   console.log(response)
   if (response) {
    this.addedIngredientsArr.push(this.ingredient.name);
    this.ingredient.name = ''
   }
  })


  }
}
