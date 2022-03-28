import { DeleteComponentComponent } from './component/delete-component/delete-component.component';
import { ActualizaComponentComponent } from './component/actualiza-component/actualiza-component.component';
import { QuienesSomosComponent } from './nav/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './nav/contacto/contacto.component';
import { ProyectoComponent } from './nav/proyecto/proyecto.component';

import { HomeComponent } from './nav/home/home.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoHijoComponent } from './component/empleado-hijo/empleado-hijo.component';
import { EmpleadoNietoComponent } from './component/empleado-nieto/empleado-nieto.component';
import { EmpleadoPadreComponent } from './component/empleado-padre/empleado-padre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'proyectos',
    component: ProyectoComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'quienes',
    component: QuienesSomosComponent,
  },
  {
    path: 'actualiza/:id',
    component: ActualizaComponentComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteComponentComponent,
  },
  {
    path: 'padre',
    component: EmpleadoPadreComponent,
  },

  {
    path: 'hijo',
    component: EmpleadoHijoComponent,
  },
  {
    path: 'nieto',
    component: EmpleadoNietoComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
