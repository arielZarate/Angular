import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import CardComponent from './card/card.component';

import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CardComponent, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export  default class ProductsComponent implements OnInit {
  selectedFruta: boolean = false;


  constructor(
    private service: MessageService, //service de comunicacion detail cualwuier componente){
    private cdr: ChangeDetectorRef
  ) {}

  frutas = [
    {
      name: 'mandarina',
      url: 'https://mon.es/wp-content/uploads/2018/11/Mandarina.png',
      descripcion:
        'Una fruta dulce y jugosa, perfecta para los días calurosos.',
    },
    {
      name: 'naranja',
      url: 'https://greenshop.ar/wp-content/uploads/2024/06/A.2.37-J.500GR.jpg',
      descripcion:
        'Una fuente excelente de vitamina C, ideal para el desayuno.',
    },
    {
      name: 'manzana',
      url: 'https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg',
      descripcion: 'Fruta crujiente y refrescante, popular en todo el mundo.',
    },
    {
      name: 'banana',
      url: 'https://jumboargentina.vtexassets.com/arquivos/ids/320502-800-600?v=636391554454870000&width=800&height=600&aspect=true',
      descripcion: 'Rica en potasio, perfecta para una merienda rápida.',
    },
    {
      name: 'melon',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlEYbljMTMjJlDL4uiMjVg_W1Lcu-t8OyZQ&s',
      descripcion: 'Fruta refrescante y dulce, ideal para el verano.',
    },
  ];

  //recibir message

  message_received: string | null = '';

  ngOnInit(): void {
    //me subscribo al mensaje recibido

    this.service.message$.subscribe((fruta: string) => {
      this.message_received = fruta;
      console.log(fruta);

      this.cdr.markForCheck();
    });
  }

  //mensaje al padre
  @Output() messageSendToFather = new EventEmitter<string>();

  sendFather() {
    // this.service.sendMessage(name);
    this.messageSendToFather.emit('Sape Sape');
  }
  //  */

  trackByFn(index:number,item:any){
    return item.id

  }
}
