import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials = {
    emailAddress: "",
    password: ""
  }

  token: any;

  constructor(private http: HttpClient) { }

  loginRequest(credentials:any){
    this.http
    .post('http://localhost:9095/auth/users/login/', credentials)
    .subscribe((response:any) => {
      this.token = response  //store token from response
      console.log(this.token)
  })
}

}
