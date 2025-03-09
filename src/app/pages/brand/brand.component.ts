import { Component, OnInit } from '@angular/core';
import { brand } from '../../core/interfaces/brands';
import { BrandsService } from '../../core/service/brands.service';

@Component({
  selector: 'app-brand',
  imports: [],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent implements OnInit{
  brandList:brand[]=[]
  constructor(private brands:BrandsService){}
  ngOnInit(): void {
 this.getBrands()
  }
  getBrands(){
    this.brands.getBrands().subscribe({
      next:(res)=>{console.log(res)
        this.brandList=res.data
      },
      error:(err)=>{console.log(err)
      }
    })
  }


}
