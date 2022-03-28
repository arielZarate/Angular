import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoPadreComponent } from './empleado-padre/empleado-padre.component';

const routes: Routes = [
  {
    path: 'padre',
    component: EmpleadoPadreComponent,
  },

  {
    path: 'hijo',
    component: EmpleadoHijoComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
