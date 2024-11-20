import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { CardDetailComponent } from '../card-detail/card-detail.component';

interface Fruta {
  name: string;
  url: string;
  descripcion: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardDetailComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // @Input() foto: string = '';
  // @Input() alt: string = '';
  //  @Input() message_song: string = '';

  @Input() fruta: Fruta | undefined;

  constructor(private router: Router) {}

  mostrarDetalle() {
    // console.log(this.fruta)

    //ademas de enviar  el name de la fruta para cceder por router envio el objeto
    this.router.navigate(['/detail/', this.fruta?.name], {
      state: { fruta: this.fruta },
    });
  }


 
}
