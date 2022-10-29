import { EmpleadoService } from './empleado-padre/empleado-service';
import { empleado } from './empleado.model';
import { ServiceAlertService } from './services/service-alert.service';
import { EmpleadoNietoComponent } from './empleado-nieto/empleado-nieto.component';
import { EmpleadoPadreComponent } from './empleado-padre/empleado-padre.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoPadreComponent,
    EmpleadoNietoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  //ESTO YA NO HACE FALTA , YA QUE LO INJECTAMOS EN EL MISMO SERVICE
  //  providers: [ServiceAlertService, EmpleadoService],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
