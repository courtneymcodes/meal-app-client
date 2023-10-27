import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private ingredientService: IngredientService){}

  addItemToCart() {
    this.ingredientService.addIngredient(this.shownRecipe).subscribe((response) => {
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
  }

}
