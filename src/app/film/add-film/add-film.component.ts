import { Component ,OnInit} from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-add-film',
  template: `
  <h2 class="center">Ajouter un Film</h2>
  <app-film-form [film]="film"></app-film-form>
`,
  styles: [
  ]
})
export class AddFilmComponent implements OnInit{
  film!:Film
  ngOnInit(){
    this.film= new Film();
  }
}
