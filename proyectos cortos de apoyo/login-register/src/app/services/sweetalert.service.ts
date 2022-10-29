import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetalertService {
  constructor() {}

  normalMessage() {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'cargando pagina web ',
      showConfirmButton: false,
      timer: 500,
    });
  }
}
