import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empleado-nieto',
  templateUrl: './empleado-nieto.component.html',
  styleUrls: ['./empleado-nieto.component.css'],
})
export class EmpleadoNietoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //importamos @Output y EventEmitter
  @Output() caracteristicaEmpleadoNieto = new EventEmitter<string>();

  agregarCaracteristica(value: string) {
    this.caracteristicaEmpleadoNieto.emit(value);
  }
}
