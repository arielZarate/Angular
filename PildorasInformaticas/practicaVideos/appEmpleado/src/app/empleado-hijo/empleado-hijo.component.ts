import { empleado } from './../empleado.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css'],
})
export class EmpleadoHijoComponent implements OnInit {
  @Input() empleadoLista: empleado;
  @Input() indice: number;
  constructor() {}

  ngOnInit(): void {}

  /*

  arrayCaracteristica: string[] = [];

  AgregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristica.push(nuevaCaracteristica);
  }

  */
}
