import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() foto: string = '';
  @Input() alt: string = '';
  @Input() message_song: string = '';

  ngOnInit(): void {
    console.log('montando el componente card de prodducts');
  }
}
