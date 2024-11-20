import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
//import { MessageService } from '../../../services/message.service';
//================================0

interface Fruta {
  name: string;
  url: string;
  descripcion: string;
}

//====================================

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css',
})
export class CardDetailComponent implements OnInit {
  fruta: Fruta | undefined;

  constructor(
    private activate: ActivatedRoute,
    private router: Router // private service: MessageService //service de comunicacion detail cualwuier componente
  ) {}

  ngOnInit(): void {
    this.activate.paramMap.subscribe(() => {
      this.fruta = history.state.fruta;

      if (!this.fruta) {
        console.log('Error al carga la fruta en el detalle');
        this.router.navigate(['/']);
      }
    });
  }

  //NOTA: NO SE PUEDE ENVIAR UN MENSAJE DIRECTO AL COMPONENTE PADRE O ABUELO DADO QUE EL CARD-DETAIL NO ESTA ENVUELTO

  //SE DEBE USAR UN SERVICES DE COMUNICACION GLOBLA DENTRO de /app/services
}
