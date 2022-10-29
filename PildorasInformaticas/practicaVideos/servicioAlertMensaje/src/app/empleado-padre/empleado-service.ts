import { Injectable } from '@angular/core';
import { empleado } from './../empleado.model';

//estamos importando un servicio dentro de otro , video 23
import { ServiceAlertService } from './../services/service-alert.service';

//ATENCION TENEMOS UN SERVICIO DENTRO DE OTRO

//LO ESTAMOS IUNJECTANDO EN EL APP MODULO
@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private _serviceAlert: ServiceAlertService) {}

  empleados: empleado[] = [
    new empleado('Juan', 'diaz', 120000, 'Developer'),
    new empleado('Ariel', 'Zarate', 250000, 'Developer'),
    new empleado('Maria', 'guzman', 34000, 'Developer'),
    new empleado('franco ', 'Furlani', 620000, 'Developer'),
  ];

  AgregarEmpleadoServicio(miEmpleado: empleado) {
    //ahora agrego el empleado al array empleados
    //aca emito el mensaje
    this._serviceAlert.mensaje(
      `Esta por agregar a ${miEmpleado.nombre} ${miEmpleado.apellido} `
    );
    this.empleados.push(miEmpleado);
  }
}
