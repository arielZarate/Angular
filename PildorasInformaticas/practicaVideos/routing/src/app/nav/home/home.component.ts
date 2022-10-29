import { EmpleadoService } from './../../services/empleado-service';
import { Component, OnInit } from '@angular/core';

//importados
import { empleado } from '../../Empleado.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _serviceEmpleado: EmpleadoService) {}

  ngOnInit(): void {
    this.empleados = this._serviceEmpleado.empleados;
  }

  empleados: empleado[] = [];

  title = 'CRUD ';

  cuadroNombre: string = '';

  cuadroApellido: string = '';

  cuadroCargo: string = '';

  cuadroSalario: number = 0;

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
