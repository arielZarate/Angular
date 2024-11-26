import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProductsComponent from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';

import { CommonModule } from '@angular/common';
import { ContactComponent } from "./components/contact/contact.component";
import NavbarComponent from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductsComponent,
    FormsComponent,
    ContactComponent,
    FormsModule,
    CommonModule,
    ContactComponent,
    NavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {}
  title = 'Angular 18 repaso general ';

  fruta = '';
  sendCity(city: string) {
    alert('la ciudad seleccionada es :' + city);
  }

  mensajeReceived(mensaje: string) {
    this.fruta = mensaje;

    console.log("Mensaje recibido en el AppComponent: ", mensaje);

  }
}
