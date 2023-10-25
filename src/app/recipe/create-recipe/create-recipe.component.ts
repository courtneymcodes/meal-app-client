import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent {

  recipe = {
    name: "",
    instructions: "",
    imageUrl: "",
    sourceUrl: "",
  }

  constructor(private recipeService: RecipeService, private router: Router) {}

  createRecipe(recipe:any){
     this.recipeService.createRecipe(recipe).subscribe((response:any) => {
      this.recipe = response.data

      console.log(this.recipe)
      console.log(response)
      if(response) {
        this.router.navigate(['/recipes'])
      }
  })
}
}