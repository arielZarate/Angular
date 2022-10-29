import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoPadreComponent } from './empleado-padre/empleado-padre.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpleadoNietoComponent } from './empleado-nieto/empleado-nieto.component';

@NgModule({
  declarations: [AppComponent, EmpleadoHijoComponent, EmpleadoPadreComponent, EmpleadoNietoComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
