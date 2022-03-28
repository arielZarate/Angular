import { ServiceAlertService } from './../services/service-alert.service';
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
  constructor(private _serviceAlert: ServiceAlertService) {}

  ngOnInit(): void {}

  arrays: string[] = [];

  AddCaracteristicas(newItem: string) {
    //aca meto el servicio de avisar del push
    this._serviceAlert.mensaje(
      `Se esta por agregar la caracteristica ${newItem}`
    );
    this.arrays.push(newItem);
  }
}
