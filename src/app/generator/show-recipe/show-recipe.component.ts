import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss']
})
export class ShowRecipeComponent implements OnInit{
  @Input() recipe: any

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    console.log(this.recipe)
  }

  saveRecipe() {
    this.recipeService.createRecipe(this.recipe).subscribe((response) => {
      console.log(response)
    })
  }

}
