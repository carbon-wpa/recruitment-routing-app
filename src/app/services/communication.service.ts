import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProductBasketModel, ProductModel} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public basket: BehaviorSubject<ProductBasketModel[]> = new BehaviorSubject<ProductBasketModel[]>([]);


  public addProduct(product: ProductModel): void {
    const basketValue = [...this.basket.value];
    const productIndex = basketValue.findIndex(item => item.id === product.id);

    if(productIndex >= 0) {
      basketValue[productIndex].quantity += 1;
    } else {
      basketValue.push({...product, quantity: 1});
    }

    this.basket.next([...basketValue]);
  }

  public deleteProduct(product: ProductModel): void {
    const basketValue = [...this.basket.value];
    const productIndex = basketValue.findIndex(item => item.id === product.id);

    if(productIndex >= 0) {
      if(basketValue[productIndex].quantity > 1) {
        basketValue[productIndex].quantity -= 1;
      } else {
        basketValue.splice(productIndex, 1);
      }
    }

    this.basket.next([...basketValue]);
  }
}
