import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-detail",
  standalone: true,
  imports: [],
  templateUrl: "./card-detail.component.html",
  styleUrl: "./card-detail.component.css",
})
export class CardDetailComponent implements OnInit {
  @Input() message: string = "";

  ngOnInit(): void {
    console.log("montando el componente card-detail");
  }
}
