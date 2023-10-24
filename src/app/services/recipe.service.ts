import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get('http://localhost:9095/api/recipes/')
  }

  getRecipeById(recipeId:any) {
    return this.http.get(`http://localhost:9095/api/recipes/${recipeId}/`)
  }

  createRecipe(recipe:any) {
    return this.http.post('http://localhost:9095/api/recipes/', recipe)
  }
}
