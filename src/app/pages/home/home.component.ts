import { SearchPipe } from './../../shared/pipes/search.pipe';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/service/product.service';
import {  product } from '../../core/interfaces/products';
import { categories} from '../../core/interfaces/categories';
import { CategoriesService } from '../../core/service/categories.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/service/cart.service';


@Component({
  selector: 'app-home',
  imports: [FormsModule, CarouselModule, RouterLink, CurrencyPipe, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  searchTerm:string="";
  productlist:product[]=[]
  categorylist:categories[]=[]
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left text-green-800 "></i>', '<i class="fa-solid fa-caret-right text-green-800"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  custommainslider: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left text-green-800 "></i>', '<i class="fa-solid fa-caret-right text-green-800"></i>'],
    items:1,
    nav: true
  }
 
 

  constructor(private cart:CartService,private products:ProductService,private categories:CategoriesService){}
  ngOnInit(): void {
    this.getproduct()
    this.getcategories()
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
  getcategories(){
    this.categories.getcategories().subscribe({
      next:(res)=>{console.log(res)
        this.categorylist=res.data
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
