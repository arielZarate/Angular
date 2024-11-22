import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';




interface ContactFormProp{
  correo:string
}



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
 //styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {


  /**
   * 
   
  ngModel //una soladireccion

[(ngModel)] doble direccion

   */

   model={
    correo:""
   }

  


  ngOnInit(): void {
    console.log("aca se monto el form de contacto")
  }


  onSubmit(form:any):void{
   console.log("forms value",form)

 /**  if(this.model.correo ==="" || !this.model.correo)
   {
     alert("el campo esta vacio")
   } */
  }

}
