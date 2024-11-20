# MiPrimerComponente


Esto es un repaso de Angular dado a que tuve varios meses sin usarlo y se actualizo como nunca 😀



# Novedades
Angular trae nuevas dependencias como standalone donde simplifica la estructuracion de modulos 



# Dependencias 

- Tailwindcss 



## Estructura de orden 

Dentro de app crear una nueva folder llamda components para simular la estructura de nextjs

y ahi dentro crear los componentes 

- app.component.html  /html principal con el `<routerOulet>`
- app.component.ts   //Componente ts principal 
- app.component.css  //css del componente app NO GLOBAL
- app.component.spec.ts //testing
- app.config.ts  // aca se configura el componente principal debo verlo bien aun ☺️
- app.route.ts // aca se declara el ruteo

```typescript
src/
 └── app/
     ├── components/
     │   ├── products/
     │   │   ├── card/
     │   │   │   ├── card.component.ts
     │   │   │   ├── card.component.html
     │   │   │   ├── card.component.css
     │   │   │   └── card.component.spec.ts
     │   │   ├── card-detail/
     │   │   │   ├── card-detail.component.ts
     │   │   │   ├── card-detail.component.html
     │   │   │   ├── card-detail.component.css
     │   │   │   └── card-detail.component.spec.ts
     │   │   ├── products.component.ts
     │   │   ├── products.component.html
     │   │   ├── products.component.css
     │   │   └── products.component.spec.ts
     ├── interfaces/
     │   ├── product.interface.ts
     │   └── user.interface.ts
     ├── services/
     │   ├── product.service.ts
     │   └── auth.service.ts
     ├── utils/
     │   ├── formatters.ts
     │   └── validators.ts
     ├── config/
     │   ├── api.config.ts
     │   └── app.settings.ts
     ├── app.component.ts
     ├── app.component.html
     ├── app.component.css
     ├── app.config.ts
     └── app.route.ts


```

## Comunicacion entre componentes

En Angular, los conceptos de @Input y @Output son fundamentales para la comunicación entre componentes. Permiten que los componentes interactúen entre sí, enviando y recibiendo datos.

### @Input()
@Input permite que un componente hijo reciba datos de su componente padre. Esto es útil cuando queremos pasar información de un componente de nivel superior (padre) hacia uno de nivel inferior (hijo).

Uso común: Mostrar datos específicos, configurar propiedades iniciales o pasar parámetros desde el padre al hijo.


```javascript

// Componente hijo (user-profile.component.ts)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `<h2>Hola, {{ username }}!</h2>`
})
export class UserProfileComponent {
  @Input() username: string = ''; // Recibe el nombre desde el padre
}




<!-- Componente padre (app.component.html) -->
<app-user-profile [username]="'Juan Pérez'"></app-user-profile>

````

En este ejemplo:

- El componente hijo (UserProfileComponent) tiene una propiedad username marcada  con @Input, lo que le permite recibir el valor del componente padre.
- En el componente padre (AppComponent), usamos [username]="valor" para enviar  el valor 'Juan Pérez' al hijo.


### @Output()
@Output permite que un componente hijo envíe datos o eventos al componente padre. Para ello, se utiliza junto con EventEmitter, que es una clase que ayuda a emitir eventos personalizados.

Uso común: Notificar al componente padre de cambios en el hijo, como el envío de formularios, hacer clic en un botón o actualizar el estado de algún dato.
Ejemplo: Si en el componente UserProfile el usuario actualiza su nombre, podríamos usar @Output para emitir ese cambio hacia el componente padre.


````javascript
// Componente hijo (user-profile.component.ts)
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `<button (click)="sendGreeting()">Enviar Saludo</button>`
})
export class UserProfileComponent {
  @Output() greeting = new EventEmitter<string>();

  sendGreeting() {
    this.greeting.emit('Hola desde UserProfile!'); // Envía un mensaje al padre
  }
}


<!-- Componente padre (app.component.html) -->
<app-user-profile (greeting)="displayGreeting($event)"></app-user-profile>




// Componente padre (app.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-user-profile (greeting)="displayGreeting($event)"></app-user-profile>
    <p>{{ message }}</p>
  `
})
export class AppComponent {
  message = '';

  displayGreeting(greeting: string) {
    this.message = greeting; // Actualiza el mensaje con el saludo recibido del hijo
  }
}


````


En este ejemplo:

- El componente hijo (UserProfileComponent) define una propiedad greeting marcada con @Output y de tipo EventEmitter. Esta propiedad le permite emitir un mensaje hacia el componente padre.
- En el componente padre (AppComponent), el evento (greeting) está vinculado al método displayGreeting($event), que recibe el valor emitido desde el hijo y lo muestra en la plantilla.







## Detencion de cambios en Angular

  Angular detecta de forma automatica de los cambios en los componentes

  ### Change Detention

 cada componente tiene su propio detector de cambios 
 Que producen los cambios?
- eventos
- llamddas a api
- settimemout 
- llamadas asyncronicas

### 2 Estrategias

- On push : bajo demanda solo cuando se requiera 
- Default : checkAlways o sea siempre
