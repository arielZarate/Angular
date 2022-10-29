import { SweetalertService } from './../../services/sweetalert.service';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: any = FormGroup;

  formObject = {
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      //Validators.pattern('')
    ]),
  };

  constructor(
    private _service: LoginService,
    private _serviceAlert: SweetalertService
  ) {}

  ngOnInit(): void {
    this._serviceAlert.normalMessage();
    this.formLogin = new FormGroup(this.formObject);
  }

  login() {
    console.log('apretaron login()');
    console.log(this.formLogin);

    //envio los datos al service
    this._service.auth(this.formLogin.value);
  }

  verifyField(field: string): string {
    const element = this.formLogin.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es obligatorio`)
      : '';
    return message;
  }
}
