import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

   apiKey:string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getRandomRecipe() {
  
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${this.apiKey}`
    console.log(url)
    return this.http.get(url)
  }
}
