import { BaseService } from './../../services/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  // constructor() {}

  //este metodo hereda al baseService
  //solo seteo los endpoint y invoco al metodo post
  auth(obj: Object) {
    this.setEndPoint('auth');
    return this.post(obj);
  }
}
