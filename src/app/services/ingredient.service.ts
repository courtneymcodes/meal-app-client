import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient, ) { }

  //add ingredient to cart. Takes 2 parameters: ingredient object being added and the cart id of cart it is being added to
  addIngredient(ingredient:any, cartId: string) {
    return this.http.post(`http://localhost:9095/api/cart/${cartId}/ingredients/`, ingredient)
  }
  
  //remove ingredient from cart
  deleteIngredient(ingredientId:string, cartId: string) {
    return this.http.delete(`http://localhost:9095/api/cart/${cartId}/ingredients/${ingredientId}/`)
  }

  getAllCartIngredients(cartId: string) {
    return this.http.get(`http://localhost:9095/api/cart/${cartId}/`)
  }

  addRecipeIngredient(ingredient:string, recipeId: string) {
    return this.http.post(`http://localhost:9095/api/recipes/${recipeId}/ingredients/`, ingredient)
  }
}
