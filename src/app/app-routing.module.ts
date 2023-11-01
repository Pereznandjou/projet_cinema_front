import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmComponent } from './film/list-film/list-film.component';
import { DetailFilmComponent } from './film/detail-film/detail-film.component';
import { EditFilmComponent } from './film/edit-film/edit-film.component';
import { AddFilmComponent } from './film/add-film/add-film.component';

const routes: Routes = [
  {path: '',redirectTo:'films',pathMatch:'full'},
  //  {path: 'films',component:ListFilmComponent},
  //  {path: 'edit/film/:id',component:EditFilmComponent},
  //  {path: 'film/add',component:AddFilmComponent},
  //  {path: 'film/:id',component:DetailFilmComponent},
   //{path: 'edit/film/:id',component:EditFilmComponent},
  // {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
