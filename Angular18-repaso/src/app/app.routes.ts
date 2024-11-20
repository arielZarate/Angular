import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CardDetailComponent } from './components/products/card-detail/card-detail.component';

export const routes: Routes = [


  /**  {
    path: '',
    component: ProductsComponent,
  }, */
  {
    path: 'detail/:name',
    component: CardDetailComponent,
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
