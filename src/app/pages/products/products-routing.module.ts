import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./products.component').then(c => c.ProductsComponent),
    children: [
      {
        path: ':id',
        loadComponent: () => import('./components/product-details/product-details.component').then(c => c.ProductDetailsComponent)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
