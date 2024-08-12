import { Pipe, PipeTransform } from '@angular/core';
import {ProductBasketModel} from "../models";

@Pipe({
  name: 'basketQuantity',
  standalone: true
})
export class BasketQuantityPipe implements PipeTransform {

  transform(basket: ProductBasketModel[]): number {
    if(!basket) {
      return 0;
    }

    return basket.reduce((total, item) => total + item.quantity, 0);
  }

}
