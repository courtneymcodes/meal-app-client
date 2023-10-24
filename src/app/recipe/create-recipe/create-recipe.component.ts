import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent {

  recipe = {
    name: "",
    instructions: "",
    image: "",
    source: "",
  }

  onSubmit() {
    console.log("Form data: ", this.recipe)
  }
}
