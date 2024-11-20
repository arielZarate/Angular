import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {


/*NOTA: SI USAS [(ngmodel)]=username  

aca se debe crear 


 // Variables para enlazar con ngModel
  username: string = '';
  email: string = '';
  password: string = '';
  confirmation: string = '';


    sendForm() {
    // Muestra los valores en consola
    console.log({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmation: this.confirmation,
    });


    se enlaza el template con el componente ts a traves de binding
  }



*/


  //creacion de un formGroup
  loginForm = new FormGroup({
    //se peude validar en cada ForControl
    username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(9)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    confirmation: new FormControl('',[Validators.required,Validators.minLength(4)]),
  });


  sendForm(event: Event) {
    event.preventDefault();

    /*
    const formElements = (event.target as HTMLFormElement).elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement;
      if (element.name && element.value) {
        console.log(`Campo: ${element.name}, Valor: ${element.value}`);
      }
    }
    */


    console.log(this.loginForm.value)
  }

}
