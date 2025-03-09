import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  
  constructor(private httpclient:HttpClient) {}
    baseurl:string=environment.baseUrl
  
  getBrands():Observable<any> {
    return this.httpclient.get(`${this.baseurl}/api/v1/brands`)
  }
}
