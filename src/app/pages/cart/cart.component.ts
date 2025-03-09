import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/service/cart.service';
import { cart } from '../../core/interfaces/cart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor(private cart:CartService){}
  cartData!:cart
  cartId!:string
  ngOnInit(): void {
    this.getcart()
  }

getcart(){
    this.cart.getCart().subscribe({
          next:(res)=>{console.log("cart res",res)
            this.cartData=res.data
            this,this.cartId=res.cartId
            
          },
          error:(err)=>{console.log("cart err",err)
          }
        })

}
removeItem(id:string){

  this.cart.removeCartItem(id).subscribe({
    next:(res)=>{console.log("cart res",res)
      this.cartData=res.data
    },
    error:(err)=>{console.log("cart err",err)
    }
  })
}
updateQuantity(id:string,count:number){

  this.cart.updatequantity(id,count).subscribe({
    next:(res)=>{console.log("cart res",res)
      this.cartData=res.data
    },
    error:(err)=>{console.log("cart err",err)
    }
  })
}

clearCart(){
  this.cart.clearCart().subscribe({
    next:(res)=>{console.log("cart res",res)
      this.cartData={} as cart
    },
    error:(err)=>{console.log("cart err",err)
    }
  })
}
}