import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css',
})
export class CardDetailComponent implements OnInit {
  @Output() messageSendToFather = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('montando el componente card-detail');
  }

  sendFather() {
    let message = 'esto fue enviado desde el detail usandoo two-binding';

    this.messageSendToFather.emit(message);
  }
}
