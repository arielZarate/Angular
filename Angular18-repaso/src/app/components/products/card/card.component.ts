import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Router,RouterLink } from '@angular/router';


interface Fruta {
  name: string;
  url: string;
  descripcion: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
 // styleUrl: './card.component.css',
})
export default class CardComponent {
  // @Input() foto: string = '';
  // @Input() alt: string = '';
  //  @Input() message_song: string = '';

  @Input() fruta: Fruta | undefined;

//  constructor(private router: Router) {}





 /** //esta es una funcion que se usaba con el navigate()
  mostrarDetalle() {
    // console.log(this.fruta)

    //ademas de enviar  el name de la fruta para cceder por router envio el objeto
    this.router.navigate(['/detail/', this.fruta?.name], {
      state: { fruta: this.fruta },
    });
  } */


 
}
