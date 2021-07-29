import { BaseService } from './../../services/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  // constructor() {}

  //este metodo hereda al baseService
  //solo seteo los endpoint y invoco al metodo post
  auth(obj: any) {
    this.setEndPoint('/login');
    return this.post(obj);
  }
}
