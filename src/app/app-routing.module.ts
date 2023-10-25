import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';

const routes: Routes = [
  //{path: '',redirectTo:'films',pathMatch:'full'},
   {path: 'films',component:ListFilmComponent},
   {path: 'film/:id',component:DetailFilmComponent},
  // {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
