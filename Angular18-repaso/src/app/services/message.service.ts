import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new Subject<string>(); //.asObservable(); //rxjs
  message$ = this.messageSource.asObservable();

  constructor() {}

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

  /**
messageSource es un Subject que se utiliza para emitir mensajes.
message$ es un Observable que otros componentes pueden suscribirse para recibir mensajes.
sendMessage permite emitir un nuevo mensaje. */
}
