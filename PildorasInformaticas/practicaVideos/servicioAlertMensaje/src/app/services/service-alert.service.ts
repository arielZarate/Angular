import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceAlertService {
  constructor() {}

  //llamaremos a este service y  usaremos este metodo
  mensaje(mensaje: string) {
    alert(mensaje);
  }
}
