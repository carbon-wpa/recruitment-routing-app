import {Component, OnInit} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ProductsService} from "../../services";
import {ProductModel} from "../../models";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {finalize} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  public isLoading: boolean = true;
  public products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this.getProducts();
  }


  private getProducts(): void {
    this.productsService.getProducts()
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoading = false)
      )
      .subscribe(result => this.products = result);
  }
}
