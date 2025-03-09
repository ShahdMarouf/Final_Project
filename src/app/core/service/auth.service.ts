import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient,private router:Router) { }
  baseurl:string=environment.baseUrl
  userData:any

  register(form:any):Observable<any>{
   return this.http.post(`${this.baseurl}/api/v1/auth/signup`,form)
  }
  login(form:any):Observable<any>{
    return this.http.post(`${this.baseurl}/api/v1/auth/signin`,form)
   }

   logOut(){
    localStorage.removeItem('userToken')
    this.router.navigate(['/login'])
    this.userData=null
   }
   decodeTokens(){
    const token=localStorage.getItem('userToken') as string
     this.userData= jwtDecode(token);

   }

   forgetpassword(form:any):Observable<any>{
   return this.http.post(`${this.baseurl}/api/v1/auth/forgotPasswords`,form)
  }
  verifycode(form:any):Observable<any>{
    return this.http.post(`${this.baseurl}/api/v1/auth/verifyResetCode`,form)
  }
   resetpassword(form:any):Observable<any>{
    return this.http.put(`${this.baseurl}/api/v1/auth/resetPassword`,form)
   }
 }

