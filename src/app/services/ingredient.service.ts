import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient, ) { }

  addIngredient(ingredient:any) {
    return this.http.post('http://localhost:9095/api/cart/1/ingredients/', ingredient)
  }

  deleteIngredient(ingredientId:string) {
    return this.http.delete(`http://localhost:9095/api/cart/1/ingredients/${ingredientId}/`)
  }

  addRecipeIngredient(ingredient:string, recipeId: string) {
    return this.http.post(`http://localhost:9095/api/recipes/${recipeId}/ingredients/`, ingredient)
  }
}
