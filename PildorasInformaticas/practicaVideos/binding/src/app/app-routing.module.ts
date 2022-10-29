import { EmpleadoComponent } from './components/empleado/empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empleado',
    component: EmpleadoComponent,
  },

  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
    //prefix
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
