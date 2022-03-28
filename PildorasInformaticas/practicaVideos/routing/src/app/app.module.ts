import { ContactoComponent } from './nav/contacto/contacto.component';
import { ProyectoComponent } from './nav/proyecto/proyecto.component';
import { HomeComponent } from './nav/home/home.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './component/empleado-hijo/empleado-hijo.component';
import { EmpleadoNietoComponent } from './component/empleado-nieto/empleado-nieto.component';
import { EmpleadoPadreComponent } from './component/empleado-padre/empleado-padre.component';

import { QuienesSomosComponent } from './nav/quienes-somos/quienes-somos.component';
import { ActualizaComponentComponent } from './component/actualiza-component/actualiza-component.component';
import { DeleteComponentComponent } from './component/delete-component/delete-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoPadreComponent,
    EmpleadoNietoComponent,
    HomeComponent,
    ProyectoComponent,
    QuienesSomosComponent,
    ContactoComponent,
    ActualizaComponentComponent,
    DeleteComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
