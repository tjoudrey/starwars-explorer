import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./views/main/main.component";
import {MovieComponent} from "./views/movie/movie.component";
import {PeopleComponent} from "./views/people/people.component";
import {PlanetComponent} from "./views/planet/planet.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'movies', component: MovieComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'planets', component: PlanetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
