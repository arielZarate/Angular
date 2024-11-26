import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';




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


  Model:ContactFormProp={
    correo:''
  }
  


  ngOnInit(): void {
    console.log("aca se monto el form de contacto")
  }



  private validateCorreo(correo:string):boolean{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(regex.test(correo)) 
    {
      return true;
    }
    else return false

  }


  // onSubmit(formValue:NgForm):void{            |1opcion| 
    //onSubmit(formValue:ContactFormProp):void{  |2opcion|
    
    onSubmit(formValue:ContactFormProp):void{


      console.log("onSubmit",formValue);
  //console.log("onSubmit",formValue.value.correo);
 /** if(this.validateCorreo(formValue.value)===false)
   {
     alert("Correo not valid")
   }
   else{

   //enviar el formulario al server
   console.log("enviar el formulario")  


   }  */
 
  }

}
