import { Routes } from '@angular/router';

export default [  {
    path: '', //tuta raiz
    loadComponent: () => import('./products.component'), //.then(m=>m.ProductsComponent)
    pathMatch: 'full', // replace 'exactPath' with 'pathMatch'//
  },

  {
    path: 'detail/:name',
    loadComponent: () => import('./card-detail/card-detail.component'),
    pathMatch: 'full', // replace 'exactPath' with 'pathMatch'//
  }, 
] as Routes;
