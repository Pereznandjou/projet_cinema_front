import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://localhost:3000/film'; // Remplacez ceci par l'URL de votre API NestJS


  constructor(private http: HttpClient) { }

  // getPokemonList(): Observable<Film[]> {
  //   return this.http.get<Film[]>('api/pokemons').pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, [])
  //     ))
  //     ;

  // }

  getFilmsList(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, [])
      ));
  }
  
  getFilmById(filmId : number): Observable<Film>{
    const url = `${this.apiUrl}/${filmId}`;
    return this.http.get<Film>(url);
  }

  addFilm(newFilm: Film): Observable<Film> {
    return this.http.post<Film>(this.apiUrl, newFilm);
  }
  uploadFilmImage(filmId: number|undefined, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
  
    const url = `${this.apiUrl}/${filmId}/upload-image`;
    return this.http.post(url, formData);
  }
  

  updateFilm(updatedFilm: Film): Observable<Film> {
    const url = `${this.apiUrl}/${updatedFilm.id}`;
    return this.http.patch<Film>(url, updatedFilm);
  }

  deleteFilm(filmId: number): Observable<void> {
    const url = `${this.apiUrl}/${filmId}`;
    return this.http.delete<void>(url);
  }

  private log(response: Film[] | Film | undefined | any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getFilmTypeList(): string[] {
    return [
      'Action',
      'Drame',
      'Aventure',
      'Comédie',
      'Horreur',
      'Science-Fiction',
      'Fantaisie',
      'Mystère',
      'Romance',
      'Thriller',
      'Documentaire'
    ];
  }

}
