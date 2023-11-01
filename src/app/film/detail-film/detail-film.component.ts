import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styles: [
  ]
})
export class DetailFilmComponent implements OnInit{
  filmList: Film[]=[];
  film: Film | undefined;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) { }
  ngOnInit(): void {
    const filmId: string | null = this.route.snapshot.paramMap.get('id');

    if (filmId) {
      this.filmService.getFilmById(+filmId).subscribe(film => this.film = film);
    }
  }

  deleteFilm(film: Film){
    this.filmService.deleteFilm(film.id!).subscribe(()=>this.goToFilmList());
  }

  goToFilmList() {
    this.router.navigate(['/films']);
  }
  goToEditFilm(film: Film) {
    this.router.navigate(['edit/film', film.id]);
  }
}
