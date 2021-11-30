import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService extends BaseService {
  //constructor() { }

  //metodo all
  all() {
    this.setEndPoint('character');
    return this.get();
  }
}
