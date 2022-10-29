import { Component, Input, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css'],
})
export class EmpleadoHijoComponent implements OnInit {
  //COMUNICACION ENTRE COMPONENTES
  @Input() empleadoLista: empleado;
  @Input() indice: number;
  constructor() {}

  ngOnInit(): void {}

  arrays: string[] = [];

  AddCaracteristicas(newItem: string) {
    this.arrays.push(newItem);
  }
}
