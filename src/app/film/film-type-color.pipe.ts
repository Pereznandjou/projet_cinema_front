import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmTypeColor'
})
export class FilmTypeColorPipe implements PipeTransform {

  transform(categorie: string): string {

    let color: string;

    switch (categorie) {
      case 'Action':
        color = 'red lighten-1';
        break;
      case 'Drame':
        color = 'blue lighten-1';
        break;
      case 'Aventure':
        color = 'green lighten-1';
        break;
      case 'Comédie':
        color = 'brown lighten-1';
        break;
      case 'Horreur':
        color = 'grey lighten-3';
        break;
      case 'Science-Fiction':
        color = 'blue lighten-3';
        break;
      case 'Fantaisie':
        color = 'deep-purple accent-1';
        break;
      case 'Mystère':
        color = 'pink lighten-4';
        break;
      case 'Romance':
        color = 'deep-purple darken-2';
        break;
      case 'Thriller':
        color = 'lime accent-1';
        break;
      case 'Documentaire':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }

}
