import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmTypeColorPipe } from './film-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FormsModule } from '@angular/forms';

const filmRoutes: Routes = [
 
   {path: 'films',component:ListFilmComponent},
   {path: 'edit/film/:id',component:EditFilmComponent},
   {path: 'film/add',component:AddFilmComponent},
   {path: 'film/:id',component:DetailFilmComponent},
  
];


@NgModule({
  declarations: [
    FilmComponent,
    ListFilmComponent,
    DetailFilmComponent,
    FilmTypeColorPipe,
    BorderCardDirective,
    EditFilmComponent,
    FilmFormComponent,
    AddFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(filmRoutes)
  ]
})
export class FilmModule { }
