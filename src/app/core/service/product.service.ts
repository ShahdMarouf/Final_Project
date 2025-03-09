import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private httpclient:HttpClient) { }
  baseurl:string=environment.baseUrl

  getproduct():Observable<any>{
    return this.httpclient.get(`${this.baseurl}/api/v1/products`)
  }
  getspecificproduct(id:string):Observable<any>{
    return this.httpclient.get(`${this.baseurl}/api/v1/products/${id}`)
  }
}
