import { Component } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent{
  data: any
  ingredientsNameList: string[] = []
  ingredientsImageList: string[] =[]
  showRecipe: boolean = false;

  recipe = {
    name: '',
    imageUrl: '',
    instructions: '',
    sourceUrl: '',
    ingredients: [] as string []

  }

  constructor(private generatorService: GeneratorService) {}

  getRandomRecipe() {
    this.generatorService.getRandomRecipe().subscribe((response) =>{
      this.data = response
      this.recipe.imageUrl = this.data.recipes[0].image
      this.recipe.name = this.data.recipes[0].title
      this.recipe.instructions = this.data?.recipes[0]?.instructions
      this.recipe.sourceUrl = this.data.recipes[0].sourceUrl

      for(let ingredient of this.data.recipes[0].extendedIngredients) {
        this.recipe.ingredients.push(ingredient.name) //create an array of igredient names from response
        this.ingredientsImageList.push("https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image) //create an array of ingredient image urls
      } 
      //console.log(this.data)
      //console.log(this.ingredientsNameList)
      // console.log(this.ingredientsImageList)
      // console.log(this.recipe.imageUrl)
      // console.log(this.recipe.name)
      this.showRecipe = true
    })
  }
}
