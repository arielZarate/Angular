import { SwalService } from './../../services/swal.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: any = FormGroup;

  FormObject = {
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      //Validators.pattern('/^[A-Z]{1}/')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  };

  // [POST] http://localhost:3000/auth

  constructor(
    private _service: LoginService,
    private swal: SwalService,
    private router: Router
  ) {} //  //private swal: SwalService, //private service: LoginService,

  ngOnInit(): void {
    this.swal.normalMessage();
    //creo el nuevo formGroup y el paso un objeto formObject
    this.formLogin = new FormGroup(this.FormObject);
  }

  //este metodo valida los imputs del hmtl -vista
  verifyField(field: string): string {
    // verifyField('usuario') -> this.form.controls['usuario']
    const element = this.formLogin.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es obligatorio`)
      : '';
    return message;
  }

  async login() {
    try {
      console.log('se ha pulsado login ');
      //console.log(this.formLogin);
      //console.log(this.formLogin.value);

      const result: any = await this._service.auth(this.formLogin.value);
      console.log(result);
      const { JWT, info } = result;

      localStorage.setItem('JWT', JWT);
      localStorage.setItem('user', JSON.stringify(info));
      //una vez que paso el login rederigimos con router link, no usar href

      this.router.navigate(['home']);
      return result;
    } catch (e) {
      return 'El usuario o password es incorrecto' + e;
    }
  }
}
