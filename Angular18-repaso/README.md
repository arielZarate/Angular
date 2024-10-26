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