import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmModule } from './film/film.module';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmTypeColorPipe } from './film-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListFilmComponent,
    DetailFilmComponent,
    FilmTypeColorPipe,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FilmModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
