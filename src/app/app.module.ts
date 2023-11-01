import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmModule } from './film/film.module';
import { ListFilmComponent } from './film/list-film/list-film.component';
import { DetailFilmComponent } from './film/detail-film/detail-film.component';
import { FilmTypeColorPipe } from './film/film-type-color.pipe';
import { BorderCardDirective } from './film/border-card.directive';
import { HttpClientModule } from '@angular/common/http';
import { EditFilmComponent } from './film/edit-film/edit-film.component';
import { FilmFormComponent } from './film/film-form/film-form.component';
import { FormsModule } from '@angular/forms';
import { AddFilmComponent } from './film/add-film/add-film.component';

@NgModule({
  declarations: [
    AppComponent,
    // ListFilmComponent,
    // DetailFilmComponent,
    // FilmTypeColorPipe,
    // BorderCardDirective,
    // EditFilmComponent,
    // FilmFormComponent,
    // AddFilmComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FilmModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
