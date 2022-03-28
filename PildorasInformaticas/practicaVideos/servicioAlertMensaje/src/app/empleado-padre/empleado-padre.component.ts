import { empleado } from './../empleado.model';
import { Component, OnInit } from '@angular/core';

//servicios

import { EmpleadoService } from './empleado-service';

//import { ServiceAlertService } from '../services/service-alert.service';
@Component({
  selector: 'app-empleado-padre',
  templateUrl: './empleado-padre.component.html',
  styleUrls: ['./empleado-padre.component.css'],
})
export class EmpleadoPadreComponent implements OnInit {
  constructor(
    //NO HARIA MAS FALTA PORQUE LO PUSIMOS EN EL EMPLEAOD SERVICE
    // private _serviceAlert: ServiceAlertService,
    private _empleadoService: EmpleadoService
  ) {}
  ngOnInit(): void {}

  //ahora este array lo lleno con el servicio de empleados
  empleados: empleado[] = this._empleadoService.empleados;

  addEmpleado() {
    let miEmpleado = new empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroSalario,
      this.cuadroCargo
    );

    /*
    esto lo lleve al servicio del empleado padre

    #un servicio dentro de otro

    aca emito el mensaje
    this._serviceAlert.mensaje(
      `Esta por agregar a ${miEmpleado.nombre} ${miEmpleado.apellido} `
    );

    */

    /*
      //ahora agrego el empleado al array empleados
      this.empleados.push(miEmpleado);
     */

    //aca tengo un servicio de empleados
    this._empleadoService.AgregarEmpleadoServicio(miEmpleado);
  }

  title = 'ComunicacionEntreComponentes';
  cuadroNombre: string = '';

  cuadroApellido: string = '';

  cuadroCargo: string = '';

  cuadroSalario: number = 0;

  /*

  empleados: empleado[] = [
    new empleado('Juan', 'diaz', 120000, 'Developer'),
    new empleado('Ariel', 'Zarate', 250000, 'Developer'),
    new empleado('Maria', 'guzman', 34000, 'Developer'),
    new empleado('franco ', 'Furlani', 620000, 'Developer'),
  ];
*/
}
