// import { Component, Input, OnInit } from '@angular/core';

// import { Film } from '../film';
// import { FilmService } from '../film.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-film-form',
//   templateUrl: './film-form.component.html',
//   styleUrls: ['./film-form.component.css']
// })
// export class FilmFormComponent implements OnInit{
//   @Input() film!: Film;
//   categorie!: string[];
//   isAddForm!: boolean;
//   fileSelected: boolean = false;
//   selectedFile: File | undefined;
//   durationError: string | null = null;
// //categorie represente la colonne categorie de la table film qui stocke toutes les categories des films
// //categories represente une occurence de categorie . Par exemple: 
// //categories= Action
// //categories= Drame
//   constructor(
//     private filmService: FilmService,
//     private router: Router,
//   ) { }

//   ngOnInit(): void {
//     this.categorie = this.filmService.getFilmTypeList();
//     this.isAddForm = this.router.url.includes('add');
//   }

  
// onFileSelected(event: any): void {
//   const files: FileList = event.target.files;
//   if (files.length > 0) {
//       this.fileSelected = true;
//       this.selectedFile = files[0];
//   } else {
//       this.fileSelected = false;
//       this.selectedFile = undefined;
//   }
// }

//   hasType(categories: string): boolean {
//     return this.film.categorie.includes(categories);
//   }

//   selectType($event: Event, categories: string) {
//     const isChecked: boolean = ($event.target as HTMLInputElement).checked;

//     if (isChecked) {
//       this.film.categorie.push(categories);
//     } else {
//       const index = this.film.categorie.indexOf(categories);
//       this.film.categorie.splice(index, 1);
//     }
//   }

//   isTypesValid(categories: string): boolean {
//     if (this.film.categorie.length == 1 && this.hasType(categories)) {
//       return false;
//     }
//     if (this.film.categorie.length > 2 && !this.hasType(categories)) {
//       return false;
//     }
//     return true;
//   }

//   // onSubmit() {
//   //   if (this.isAddForm) {
//   //     console.log('Add a form !');
  
//   //     // Étape 1 : Créer le film sans l'image
//   //     this.filmService.addFilm(this.film).subscribe((film: Film) => {
//   //       console.log('Film created:', film);
//   //       if(film){
//   //         // Étape 2 : Vérifier si une image a été sélectionnée
//   //       if (this.selectedFile) {
//   //         console.log('Upload image!');
//   //         // Étape 3 : Envoyer l'image avec l'ID du film nouvellement créé
//   //         this.filmService.uploadFilmImage(film.id, this.selectedFile).subscribe(() => {
//   //           console.log('Image uploaded successfully!');
//   //           this.router.navigate(['/film', film.id]);
//   //         });
//   //       } else {
//   //         // Aucune image sélectionnée, simplement naviguer vers la page du film
//   //         this.router.navigate(['/film', film.id]);
//   //       }
//   //       }else{console.log('le film n\'a pas ete crée:');}
        
//   //     });
//   //   } else {
//   //     console.log('Update a form !');
//   //     // Si c'est une mise à jour, appelle directement la mise à jour du film sans vérifier l'image
//   //     this.filmService.updateFilm(this.film).subscribe(() => this.router.navigate(['/film', this.film.id]));
//   //   }
//   // }
//   onSubmit() {
//     if (this.isAddForm) {
//       console.log('Add a form !');

//       // Vérifier si la durée est au format attendu (ajuster la logique selon vos besoins)
//       if (!this.isValidDurationFormat(this.film.duree)) {
//         this.durationError = 'La durée du Film doit être inférieure ou égale à 5 heures, au format hhmm (par exemple, 2h30).';
//         return;
//       }

//       // Étape 1 : Créer le film sans l'image
//       this.filmService.addFilm(this.film).subscribe((film: Film) => {
//         console.log('Film created:', film);

//         // Étape 2 : Vérifier si une image a été sélectionnée
//         if (this.selectedFile) {
//           console.log('Upload image!');
//           // Étape 3 : Envoyer l'image avec l'ID du film nouvellement créé
//           this.filmService.uploadFilmImage(film.id, this.selectedFile).subscribe(() => {
//             console.log('Image uploaded successfully!');
//             this.router.navigate(['/film', film.id]);
//           });
//         } else {
//           // Aucune image sélectionnée, simplement naviguer vers la page du film
//           this.router.navigate(['/film', film.id]);
//         }
//       });
//     } else {
//       console.log('Update a form !');
//       // Si c'est une mise à jour, appelle directement la mise à jour du film sans vérifier l'image
//       this.filmService.updateFilm(this.film).subscribe(() => this.router.navigate(['/film', this.film.id]));
//     }
//   }

//   // Fonction de validation de la durée (exemple basique, ajuster selon vos besoins)
//   isValidDurationFormat(duration: string): boolean {
//     const durationPattern = /^(?:[0-4]\d|h[0-4][0-9]|5h00)$/;
//     const isValid = durationPattern.test(duration);
//     if (!isValid) {
//       this.durationError = 'La durée du Film doit être inférieure ou égale à 5 heures, au format hhmm (par exemple, 2h30).';
//     } else {
//       this.durationError = null;
//     }
//     return isValid;
//   }
  
  
  
  

//   // onSubmit() {
//   //   if (this.isAddForm) {
//   //     console.log('Add a form !');
//   //    this.filmService.addFilm(this.film)
//   //    .subscribe((film:Film)=>this.router.navigate(['/film', film.id]));
//   //   } else {
//   //     console.log('Update a form !');
//   //     this.filmService.updateFilm(this.film).subscribe(() => this.router.navigate(['/film', this.film.id]));

//   //   }
//   // }

// }




//version 2
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {
  @Input() film!: Film;
  categorie!: string[];
  isAddForm!: boolean;
  fileSelected: boolean = true;
  selectedFile: File | undefined;
  durationError: string | null = null;

  constructor(
    private filmService: FilmService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.categorie = this.filmService.getFilmTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
  this.fileSelected = files.length > 0;
  this.selectedFile = this.fileSelected ? files[0] : undefined;
  }

  hasType(categories: string): boolean {
    return this.film.categorie.includes(categories);
  }

  selectType($event: Event, categories: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.film.categorie.push(categories);
    } else {
      const index = this.film.categorie.indexOf(categories);
      this.film.categorie.splice(index, 1);
    }
  }

  isTypesValid(categories: string): boolean {
    if (this.film.categorie.length == 1 && this.hasType(categories)) {
      return false;
    }
    if (this.film.categorie.length > 2 && !this.hasType(categories)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      console.log('Add a form !');

      // Vérifier si la durée est au format attendu (ajuster la logique selon vos besoins)
      if (!this.isValidDurationFormat(this.film.duree)) {
        this.durationError = 'La durée du Film doit être inférieure ou égale à 5 heures, au format hhmm (par exemple, 2h30).';
        return;
      }

      // Étape 1 : Créer le film sans l'image
      this.filmService.addFilm(this.film).subscribe((film: Film) => {
        console.log('Film created:', film);

        // Étape 2 : Vérifier si une image a été sélectionnée
        if (this.selectedFile) {
          console.log('Upload image!');
          // Étape 3 : Envoyer l'image avec l'ID du film nouvellement créé
          this.filmService.uploadFilmImage(film.id, this.selectedFile).subscribe(() => {
            console.log('Image uploaded successfully!');
            this.router.navigate(['/film', film.id]);
          });
        } else {
          // Aucune image sélectionnée, simplement naviguer vers la page du film
          this.router.navigate(['/film', film.id]);
        }
      });
    } else {
      console.log('Update a form !',this.film);
      
    // Vérifiez la validité du format de la duréen
    if (!this.isValidDurationFormat(this.film.duree)) {
      this.durationError = 'La durée du Film doit être inférieure ou égale à 5 heures, au format hhmm (par exemple, 2h30).';
      return;
    }
      // Si c'est une mise à jour, appelle directement la mise à jour du film sans vérifier l'image
      this.filmService.updateFilm(this.film).subscribe(() => this.router.navigate(['/film', this.film.id]));
    }
  }

  // Fonction de validation de la durée (exemple basique, ajuster selon vos besoins)
  isValidDurationFormat(duration: string): boolean {
    const durationPattern = /^(?:[0-4]\d|h[0-4][0-9]|5h00)$/;
    const isValid = durationPattern.test(duration);
    return isValid;
  }
}
