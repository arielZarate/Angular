import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private _service: CharacterService) {}
  //los datos deben llegar en array para ser desglosados en un iterador en la vista con un *ngFor
  //este array se llamara en el html
  characters = [];

  //Le saque el :void

  //ngOnInit(): void {}

  async ngOnInit() {
    const data: any = await this._service.all();
    console.log(data);
    this.characters = data.results;
  }
}
