import { stringify } from '@angular/compiler/src/util';
import { Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class SwalService implements OnInit {
  //link : https://sweetalert2.github.io/
  /*

  normalMessage({ html, icon, timer }) {
    Swal.fire({
        html,
      icon: icon || 'success',
      showConfirmButton: true,
      timer: timer || 1500,
    });
  }
 */

  normalMessage() {
    const salida = Swal.fire({
      text: 'Cargando ...',
      //  icon: 'info',
      showConfirmButton: false,
      timer: 1500,
    });
    /*
      const salida = Swal.fire({
      title: 'Oops...',
      icon: 'error',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
      */

    return salida;
  }
  ngOnInit() {}
}
