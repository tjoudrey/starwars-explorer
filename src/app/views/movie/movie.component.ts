import { Component, OnInit } from '@angular/core';
import {StarwarsApiService} from "../../services/starwars-api.service";
import {Observable} from "rxjs";
import {Person} from "../../models/person";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  private loading: boolean = false;
  movies: Observable<Movie[]>;

  constructor(private starwarsAPIService:StarwarsApiService) { }

  ngOnInit() {
    this.movies = this.starwarsAPIService.movies;
    this.starwarsAPIService.loadMovies();
  }
}
