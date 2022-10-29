import { BaseService } from './../../services/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//solo seteo los endpoint y invoco al metodo post
export class LoginService extends BaseService {
  auth(obj: any) {
    //auth es el endpoint en el back mio
    this.setEndPoint('auth');
    //return this.post();
  }
}
