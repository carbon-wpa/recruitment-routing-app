import { Pipe, PipeTransform } from '@angular/core';
import {ProductBasketModel} from "../models";

@Pipe({
  name: 'basketTotalAmount',
  standalone: true
})
export class BasketTotalAmountPipe implements PipeTransform {

  transform(basket: ProductBasketModel[]): number {
    if(!basket) {
      return 0;
    }

    return basket.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

}
