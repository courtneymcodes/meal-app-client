import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartData: any
  recipeListData: any

  setCartData(cartObject:any,) {
    this.cartData = cartObject
  }

  getCartData() {
    return this.cartData
  }

  setRecipeListData(recipeList: any) {
    this.recipeListData = recipeList
  }

  getRecipeListData() {
    return this.recipeListData
  }

}
