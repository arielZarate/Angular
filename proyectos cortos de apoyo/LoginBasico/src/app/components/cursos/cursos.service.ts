import { BaseService } from './../../services/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService extends BaseService {
  // constructor() { }

  all() {
    this.setEndPoint('cursos/all');
    return this.get();
  }
}
