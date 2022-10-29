import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro Usuarios';
  mensaje: string = '';
  nombre = '';
  apellido = '';
  bandera = false;
  entradas: any;
  cargo: string = '';

  RegistrarUsuario(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.mensaje = ` El usuario ${this.nombre} ${this.apellido} `;
    this.bandera = true;
  }

  constructor() {
    //si quiero inicializar algo lop hago en el contructor
    this.entradas = [
      {
        titulo: ' Python cada dia mas presente',
      },
      {
        titulo: ' java  presente hace mas de 20 años',
      },

      {
        titulo: 'javascript cada dia mas optimo',
      },
      {
        titulo: 'C# cada dia mas potente ',
      },
      {
        titulo: 'Donde quedo Pascal y los demas lenguajes',
      },
    ];
  }
}
