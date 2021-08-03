import { RegistroService } from './registro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private _service: RegistroService) {}
  loaded: boolean = false;
  formRegistro: any = FormGroup;
  FormObject: any = {
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  };

  verifyField(field: string): string {
    // verifyField('usuario') -> this.form.controls['usuario']
    const element = this.formRegistro.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es obligatorio`)
      : '';
    return message;
  }

  async register() {
    // this.form.value
    const result: any = await this._service.create(this.formRegistro.value);
    console.log(result);
    return result;
  }
  ngOnInit(): void {
    this.formRegistro = new FormGroup(this.FormObject);
  }
}
