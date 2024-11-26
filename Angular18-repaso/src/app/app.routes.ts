import { Routes } from '@angular/router';
//import CardDetailComponent from './components/products/card-detail/card-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full', // replace 'exactPath' with 'pathMatch'
  }, 

  // no se pone la / antes nunca



  {
    path: 'products',
    loadChildren: () => import('./components/products/products.routes'),
   // pathMatch: 'full', // replace 'exactPath' with 'pathMatch'//
  },

  {
    path: 'forms',
    loadComponent: () =>
      import('./components/forms/forms.component').then(
        (f) => f.FormsComponent
      ),
   // pathMatch: 'full',
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
     //pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
