import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   userToken=localStorage.getItem('userToken') as string
  constructor(private httpclient:HttpClient) { }
    baseurl:string=environment.baseUrl
  
  addToCart(id:string):Observable<any>{
    return this.httpclient.post(`${this.baseurl}/api/v1/cart`,
      {
        "productId":id
    },{
      headers:{
        token:this.userToken
      }
    }
    )
  }
    
  getCart():Observable<any>{
    return this.httpclient.get(`${this.baseurl}/api/v1/cart`,
    {
      headers:{
        token:this.userToken
      }
    }
    )
  }
  removeCartItem(id:string):Observable<any>{
    return this.httpclient.delete(`${this.baseurl}/api/v1/cart/${id}`,
    {
      headers:{
        token:this.userToken
      }
    }
    )
  }
  updatequantity(id:string,count:number):Observable<any>{
    return this.httpclient.put(`${this.baseurl}/api/v1/cart/${id}`,
    {
      "count": count
  },{
      headers:{
        token:this.userToken
      }
    }
    )
  }
  clearCart():Observable<any>{
    return this.httpclient.delete(`${this.baseurl}/api/v1/cart`,
    {
      headers:{
        token:this.userToken
      }
    }
    )
  }
}
