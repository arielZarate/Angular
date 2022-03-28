import { empleado } from './../../Empleado.model';
import { Component, Input, OnInit } from '@angular/core';

import { ServiceAlertService } from 'src/app/services/service-alert.service';

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

  AddCaracteristicas(event: string) {
    //aca meto el servicio de avisar del push
    this._serviceAlert.mensaje(
      `Se esta por agregar la caracteristica ${event}`
    );

    //ahora agrego la caracteristica al arrays
    this.arrays.push(event);
  }
}
