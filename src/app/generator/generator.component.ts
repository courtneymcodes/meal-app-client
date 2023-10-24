import { Component } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  data: any
  ingredientsNameList: string[] = []
  ingredientsImageList: string[] =[]

  constructor(private generatorService: GeneratorService) {}

  getRandomRecipe() {
    this.generatorService.getRandomRecipe().subscribe((response) =>{
      this.data = response
      console.log(this.data.recipes[0])
      console.log(this.data.recipes[0].title)
      console.log(this.data.recipes[0].extendedIngredients)

      for(let ingredient of this.data.recipes[0].extendedIngredients) {
        this.ingredientsNameList.push(ingredient.name) //create an array of igredient names from response
        this.ingredientsImageList.push("https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image) //create an array of ingredient image urls
      } 
      console.log(this.ingredientsNameList)
      console.log(this.ingredientsImageList)
    })
  }
}
