import { empleado } from './../Empleado.model';
import { Injectable } from '@angular/core';

//estamos importando un servicio dentro de otro , video 23
import { ServiceAlertService } from './service-alert.service';

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
    new empleado('franco ', 'Di leo', 620000, 'Developer'),
  ];

  //este metodo busca el empleado pasando su id
  //#Deberia buscar enm una BD pero lo busca en el servicio
  encontrarEmpleado(id: number) {
    //asi guardo el empleado buscado pir el id
    let empleado: empleado = this.empleados[id];
    return empleado;
  }

  //este metodo agrega un empleado
  agregarEmpleadoServicio(miEmpleado: empleado) {
    //ahora agrego el empleado al array empleados
    //aca emito el mensaje
    this._serviceAlert.mensaje(
      //usamos template string
      `Esta por agregar a ${miEmpleado.nombre} ${miEmpleado.apellido} `
    );
    this.empleados.push(miEmpleado);
  }

  actualizarEmpleado(id: number, empleado: empleado) {
    let empleadoModificado = this.empleados[id];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.salario = empleado.salario;
    empleadoModificado.cargo = empleado.cargo;
  }

  eliminarEmpleado(id: number) {
    this.empleados.splice(id, 1);
  }
}
