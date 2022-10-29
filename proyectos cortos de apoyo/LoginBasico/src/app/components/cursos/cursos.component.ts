import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  constructor(private _service: CursosService) {}

  loaded: boolean = false;
  cursos: any = [];
  ngOnInit() {
    this.cargarCursos();
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 1500);
  }

  async cargarCursos() {
    const cursos = await this._service.all();
    console.log(cursos);
    this.cursos = cursos;
  }
}
