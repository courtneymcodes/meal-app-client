import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipeList: any;

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getAllRecipes()
    .subscribe((response:any) => {
      this.recipeList = response.data
      console.log(this.recipeList)
      console.log(response)
    })
  }

}
