import { EmpleadoPadreComponent } from './empleado-padre/empleado-padre.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'padre',
    component: EmpleadoPadreComponent,
  },

  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [],

  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
