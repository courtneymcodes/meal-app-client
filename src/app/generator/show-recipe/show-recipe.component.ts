import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss']
})
export class ShowRecipeComponent implements OnInit{
  @Input() recipe: any

  ngOnInit() {
    console.log(this.recipe)
  }

}
