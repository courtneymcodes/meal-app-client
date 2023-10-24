import { Component } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent {
  data: any
  recipeImage: string = ''
  recipeName: string = ''
  ingredientsNameList: string[] = []
  ingredientsImageList: string[] =[]
  showRecipe: boolean = false;

  constructor(private generatorService: GeneratorService) {}

  getRandomRecipe() {
    this.generatorService.getRandomRecipe().subscribe((response) =>{
      this.data = response
      this.recipeImage = this.data.recipes[0].image
      this.recipeName = this.data.recipes[0].title

      for(let ingredient of this.data.recipes[0].extendedIngredients) {
        this.ingredientsNameList.push(ingredient.name) //create an array of igredient names from response
        this.ingredientsImageList.push("https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image) //create an array of ingredient image urls
      } 
      console.log(this.ingredientsNameList)
      console.log(this.ingredientsImageList)
      console.log(this.recipeImage)
      console.log(this.recipeName)
      this.showRecipe = true
    })
  }
}
