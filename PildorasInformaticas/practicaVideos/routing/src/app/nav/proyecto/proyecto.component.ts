import { Component, OnInit } from '@angular/core';

//ipmportados
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado-service';
import { empleado } from '../../Empleado.model';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  constructor(
    //NO HARIA MAS FALTA PORQUE LO PUSIMOS EN EL EMPLEAOD SERVICE
    // private _serviceAlert: ServiceAlertService,
    private _empleadoService: EmpleadoService,
    private _router: Router
  ) {}

  //ahora este array lo lleno con el servicio de empleados
  empleados: empleado[] = [];

  title = 'CRUD ';

  cuadroNombre: string = '';

  cuadroApellido: string = '';

  cuadroCargo: string = '';

  cuadroSalario: number = 0;

  ngOnInit(): void {
    this.empleados = this._empleadoService.empleados;
  }
  addEmpleado() {
    let miEmpleado = new empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroSalario,
      this.cuadroCargo
    );

    //ahora agrego el empleado al array empleados
    this._empleadoService.agregarEmpleadoServicio(miEmpleado);
    this._router.navigate(['']);
  }

  volverHome() {
    //esto viaja al home
    this._router.navigate(['']);
  }
}
