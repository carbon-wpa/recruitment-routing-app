import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CommunicationService} from "../../services";
import {AsyncPipe, CurrencyPipe, JsonPipe} from "@angular/common";
import {NgbDropdown, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {Observable, tap} from "rxjs";
import {ProductBasketModel, ProductModel} from "../../models";
import {BasketQuantityPipe, BasketTotalAmountPipe} from "../../pipes";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgbDropdownModule,
    AsyncPipe,
    JsonPipe,
    BasketQuantityPipe,
    CurrencyPipe,
    BasketTotalAmountPipe
  ],
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public communicationService: CommunicationService) {
  }

  public deleteProduct(product: ProductBasketModel): void {
    const {quantity, ...item} = product;
    this.communicationService.deleteProduct(item);
  }
}
