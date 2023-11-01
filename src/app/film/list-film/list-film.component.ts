import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styles: [
  ]
})
export class ListFilmComponent implements OnInit{

  filmList: Film[]=[];

  constructor(private router:Router, private filmService :FilmService){}

  ngOnInit() {
    this.filmService.getFilmsList().subscribe(filmList => this.filmList=filmList);
  }
  goToFilm(film: Film){
    this.router.navigate(['/film',film.id]);
  }

}
