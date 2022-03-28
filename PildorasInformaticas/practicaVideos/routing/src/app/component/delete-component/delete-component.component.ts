import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleado } from 'src/app/Empleado.model';
import { EmpleadoService } from './../../services/empleado-service';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css'],
})
export class DeleteComponentComponent implements OnInit {
  empleados: empleado[] = [];

  title = 'delete ';

  cuadroNombre: string = '';

  cuadroApellido: string = '';

  cuadroCargo: string = '';

  cuadroSalario: number = 0;

  indice: number;

  constructor(
    //NO HARIA MAS FALTA PORQUE LO PUSIMOS EN EL EMPLEAOD SERVICE
    // private _serviceAlert: ServiceAlertService,
    private _empleadoService: EmpleadoService,
    //activateRoute sirve para rutear
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.empleados = this._empleadoService.empleados;
    this.indice = this._activatedRoute.snapshot.params['id'];
    //console.log('id es: ' + this.indice);

    let empleado: empleado = this._empleadoService.encontrarEmpleado(
      this.indice
    );
    //console.log(empleado);

    //aca cargo los datos en elcampo del html actualiza
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  eliminaEmpleado() {
    let miEmpleado = new empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroSalario,
      this.cuadroCargo
    );

    //ahora agrego el empleado a traves del servicio empleado
    this._empleadoService.eliminarEmpleado(this.indice);
    this._router.navigate(['']);
  }

  volverHome() {
    //esto viaja al home
    this._router.navigate(['']);
  }
}
