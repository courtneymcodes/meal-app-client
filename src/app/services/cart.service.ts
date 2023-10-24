import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  createCart() {
    return this.http.post('http://localhost:9095/api/cart/1/ingredients/', {})
  }
}
