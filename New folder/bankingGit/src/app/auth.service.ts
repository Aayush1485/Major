import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
private _registerUrl = "http://localhost:3000/register"

private _loginUrl =  "http://localhost:3000/login"
  constructor(private http:HttpClient) { }


  registerUser(user)
  {
return this.http.post<any>(this._registerUrl,user)
  }

 loginUser(user)
 {
  return  this.http.post<any>(this._loginUrl,user)
 }



  public login(userInfo: Users){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }


}
