import { Component } from '@angular/core';
import { Film } from '../film';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-edit-film',
  template: `
  <h2 class="center" >Editer {{film?.nom}}</h2>
  <p *ngIf="film" class="center"> 
  <img [src]="film.imageUrl" class="resized-image">
  </p>
  <app-film-form *ngIf="film" [film]="film"></app-film-form>
 
  `,
  styles: [   `
  .resized-image {
    max-width: 20%; /* Vous pouvez ajuster la largeur maximale selon vos besoins */
    height: auto;
    display: block;
    margin: 0 auto; /* Pour centrer l'image horizontalement */
  }
  `
  ]
})
export class EditFilmComponent {
  film: Film | undefined;

  constructor(private route: ActivatedRoute,
    private filmService: FilmService) { }

    ngOnInit() {
      const filmId: string | null = this.route.snapshot.paramMap.get('id');
      if (filmId) {
        this.filmService.getFilmById(+filmId).subscribe(film => this.film = film);
      } else {
        this.film = undefined;
      }
    }


}
