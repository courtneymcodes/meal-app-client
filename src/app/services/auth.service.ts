import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials = {
    emailAddress: "",
    password: ""
  }

  jwtToken: any;

  headers: any;

  constructor(private http: HttpClient) { }

  loginRequest(credentials:any){
    this.http
    .post('http://localhost:9095/auth/users/login/', credentials)
    .subscribe((response:any) => {
      this.jwtToken = response  //store token from response
      console.log(this.jwtToken)
    })
  }

  createHeadersWithJwtToken() {
     this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json'
    })
  }



}
