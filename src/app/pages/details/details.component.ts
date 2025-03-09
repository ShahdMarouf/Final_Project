import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/service/product.service';
import { product } from '../../core/interfaces/products';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../core/service/cart.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  productData:product={} as product;
  id:string='';
  constructor(private cart:CartService,private activatedRoute:ActivatedRoute,private product:ProductService ){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(p)=>{console.log(p)
        this.id=p.get('id') as string
        console.log(this.id);
        this.getproductDetails()
        
      }
    })
  }
  getproductDetails(){
 this.product.getspecificproduct(this.id).subscribe({
  next:(res)=>{console.log(res);
    this.productData=res.data;
  }
    ,error:(err)=>{console.log(err)}
  
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
