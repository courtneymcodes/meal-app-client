import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss']
})
export class ShowRecipeComponent implements OnInit{
  @Input() data: any
  @Input() recipeImage: any
  @Input() recipeName: any
  @Input() ingredientsNameList: string[] = []
  @Input() ingredientsImageList: string[] =[]
  @Input() instructions: any

  ngOnInit() {
    console.log(this.recipeImage)
    console.log(this.recipeName)
    console.log(this.ingredientsNameList)
    console.log(this.ingredientsImageList)
    console.log(this.instructions)
  }

}
