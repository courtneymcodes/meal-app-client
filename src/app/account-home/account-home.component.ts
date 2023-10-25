import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit {
recipeList: any

  constructor(private recipeService: RecipeService) {}

  ngOnInit():void {
    this.recipeService.getAllRecipes().subscribe((response:any) => {
      this.recipeList = response.data
      //console.log(this.recipeList)
    })
  }
}
