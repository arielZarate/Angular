import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, CardDetailComponent, CurrencyPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    console.log('montando componente Products');
  }

  //================================
  username: string = '';

  //======================================
  name: string = 'Ariel Zarate';
  alt: string = 'foto de camiseta de fondo';

  url: string =
    'https://www.mmlracingshop.com/cdn/shop/files/all-over-print-mens-crew-neck-t-shirt-white-front-66e6ee4c5ab16.jpg?v=1726410340&width=533';

  message_father: string = '';

  message_received: string = '';

  sendMessage() {
    return (this.message_father =
      'enviando mensaje por button desde `preducts-component a card-component');
  }

  onMessageReceived(message_del_hijo: string) {
    this.message_received = message_del_hijo;
  }
}
