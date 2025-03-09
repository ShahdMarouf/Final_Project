import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../core/interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:product[], searchTerm:string): product[] {
    return products.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))}

}