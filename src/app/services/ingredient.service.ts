import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  addIngredient(ingredient:any) {
    return this.http.post('http://localhost:9095/api/cart/1/ingredients/', ingredient)
  }
}
