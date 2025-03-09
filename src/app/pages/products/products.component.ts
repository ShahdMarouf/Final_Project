import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/service/product.service';
import {  product } from '../../core/interfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/service/cart.service';


@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
    productlist:product[]=[]
 
    constructor(private cart:CartService,private products:ProductService){}
    ngOnInit(): void {
      this.getproduct()
    }
  
    getproduct(){
      this.products.getproduct().subscribe({
        next:(res)=>{console.log(res)
          this.productlist=res.data
        },
        error:(err)=>{console.log(err)
        }
      })
    }
    addToCart(id:string){
      this.cart.addToCart(id).subscribe({
        next:(res)=>{console.log("cart res",res)
        },
        error:(err)=>{console.log("cart err",err)
        }
      })
    }

  
  }
  

