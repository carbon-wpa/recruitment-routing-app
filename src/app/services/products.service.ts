import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ProductModel} from "../models";
import {productsMock} from "../mock";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public getProducts(): Observable<ProductModel[]> {
    // todo it is mocked service to get products - replace it with real API url
    return of(productsMock);
  }

  public getProduct(id: number): Observable<ProductModel | undefined> {
    return of(productsMock.find(product => product.id === id));
  }
}
