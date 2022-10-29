import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  constructor() {}

  //variables
  nombre: string = '';
  apellido: string = '';
  edad?: number = 0;
  empresa: string = '';
  registrado = false;
  habilitado: boolean = true;
  mensaje: string = '';

  //variavble de bindingBidireccional
  NombreEmpresa: string = 'Google';

  ngOnInit(): void {
    this.cargarDatos();
    //this.Dale();
  }

  //funciones
  cargarDatos() {
    this.nombre = 'Ariel';
    this.apellido = 'Zarate';
    this.edad = 34;
    this.empresa = 'Desarrollos Ariel Working';
  }

  texto: string = '';
  Dale() {}

  //checkbox

  getRegistro(event: Event) {
    if (this.registrado == false) {
      this.registrado = true;
      this.habilitado = false;
      this.mensaje = 'El usuario se acaba de Habilitar';
      alert('habilitado');
    } else if ((this.registrado = true)) {
      this.registrado = false;
      this.habilitado = true;

      this.mensaje = 'El usuario se desabilito';
    }
  }

  /*
  getValue(event: Event): string {
  return (event.target as HTMLInputElement).value;
}

  */

  CambiaEmpresa(event: Event) {
    //hacemos un casting con event
    this.NombreEmpresa = (event.target as HTMLInputElement).value;
  }
}
