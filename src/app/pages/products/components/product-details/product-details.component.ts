import {Component, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ActivatedRoute, Router} from "@angular/router";
import {CommunicationService, ProductsService} from "../../../../services";
import {ProductModel} from "../../../../models";
import {CurrencyPipe} from "@angular/common";

@UntilDestroy()
@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  imports: [
    CurrencyPipe
  ],
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductModel | undefined;

  constructor(
    private communicationService: CommunicationService,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.listenToProductIdChange();
  }

  public addToCart(product: ProductModel): void {
    this.communicationService.addProduct(product);
  }

  private listenToProductIdChange(): void {
    this.activatedRoute.paramMap
      .pipe(
        untilDestroyed(this),
      )
      .subscribe(params => {
        const productId: number = Number(params.get('id'));
        this.getProduct(productId);
      });
  }

  private getProduct(id: number): void {
    this.productsService.getProduct(id)
      .pipe(
        untilDestroyed(this),
      )
      .subscribe(product => {
        if(!product){
          void this.router.navigate(['not-found']);
        }

        this.product = product;
      })
  }

}
