import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products-routing.module').then(r => r.ProductsRoutingModule)
  },
  {
    path: 'terms',
    pathMatch: 'full',
    loadComponent: () => import('./pages/terms/terms.component').then(c => c.TermsComponent)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
