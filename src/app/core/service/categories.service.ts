import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpclient:HttpClient) {}
    baseurl:string=environment.baseUrl
  
  getcategories():Observable<any> {
    return this.httpclient.get(`${this.baseurl}/api/v1/categories`)
  }
  getspecificcategories(id:string):Observable<any>{
    return this.httpclient.get(`${this.baseurl}/api/v1/categories/${id}`)
  }
}
