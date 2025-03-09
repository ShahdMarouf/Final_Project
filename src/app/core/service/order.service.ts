import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  token:string=localStorage.getItem('userToken') as string
      baseurl:string=environment.baseUrl
  
  onlinePayment(cartId:string,formdata:any):Observable<any>{
        return this.http.post(`${this.baseurl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
          {
            "shippingAddress":formdata
        },{
          headers:{
            token:this.token

          }
        }
        )
      }
}
