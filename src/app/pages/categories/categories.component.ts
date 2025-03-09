import { Category } from '../../core/interfaces/products';
import { CategoriesService } from '../../core/service/categories.service';
import { categories } from './../../core/interfaces/categories';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categorieslist:categories[]=[]
  constructor(private categories:CategoriesService){
  }
  ngOnInit(): void {
   this.getcategories()
  }
  getcategories(){
    this.categories.getcategories().subscribe({
      next:(res)=>{console.log(res)
        this.categorieslist=res.data
      },
      error:(err)=>{console.log(err)
      }
    })
  }

}
