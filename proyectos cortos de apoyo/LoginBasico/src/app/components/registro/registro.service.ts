import { BaseService } from './../../services/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistroService extends BaseService {
  // constructor() {}

  create(obj: Object) {
    this.setEndPoint('registro');
    return this.post(obj);
  }
}
