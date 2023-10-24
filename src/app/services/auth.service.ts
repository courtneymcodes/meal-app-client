import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getJwt(credentials:any){
    this.http
    .post('http://localhost:9095/auth/users/login/', credentials)
    .subscribe((response:any) => {
      return response 
    })
  }

  // createHeadersWithJwtToken():any {
  //    let headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.getJwt}`,
  //     'Content-Type': 'application/json'
  //   })
  //   return headers
  // }

  loginUser(credentials:any) {
    console.log(credentials)
    return this.http.post('http://localhost:9095/auth/users/login/', credentials)
  }

  registerUser(credentials:any){
    return this.http.post('http://localhost:9095/auth/users/register/', credentials)
  }
}
