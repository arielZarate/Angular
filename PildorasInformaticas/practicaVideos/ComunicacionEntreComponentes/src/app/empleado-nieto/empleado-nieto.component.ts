//importamos el Output sirve para que el padre escuche al hijo
//EventEmmiter tambien
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empleado-nieto',
  templateUrl: './empleado-nieto.component.html',
  styleUrls: ['./empleado-nieto.component.css'],
})
export class EmpleadoNietoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() caract_emple_nieto = new EventEmitter<string>();

  AgregarCaracteristicas(value: string) {
    this.caract_emple_nieto.emit(value);
  }
}
