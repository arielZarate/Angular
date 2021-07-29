import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos los modulos
const homeModule = () =>
  import('./feactures/home/home.module').then((m) => m.HomeModule);

const accountModule = () =>
  import('./feactures/account/account.module').then((m) => m.AccountModule);
const routes: Routes = [
  {
    path: 'home',
    loadChildren: homeModule,
  },
  {
    path: 'account',
    loadChildren: accountModule,
    // data: { showHeader: false, showFooter: false },
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
