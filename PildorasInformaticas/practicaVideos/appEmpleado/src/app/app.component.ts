import { empleado } from './empleado.model';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'listado de  Empleado';
  cuadroNombre: string = '';

  cuadroApellido: string = '';

  cuadroCargo: string = '';

  cuadroSalario: number = 0;

  empleados: empleado[] = [
    new empleado('Juan', 'diaz', 120000, 'Developer'),
    new empleado('Ariel', 'Zarate', 250000, 'Developer'),
    new empleado('Maria', 'guzman', 34000, 'Developer'),
    new empleado('franco ', 'Furlani', 620000, 'Developer'),
  ];

  addEmpleado() {
    let miEmpleado = new empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroSalario,
      this.cuadroCargo
    );

    //ahora agrego el empleado al array empleados
    this.empleados.push(miEmpleado);
  }
}
