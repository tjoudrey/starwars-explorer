import { Injectable } from '@angular/core';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Planet} from "../models/planet";
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {Movie} from "../models/movie";
import {Person} from "../models/person";
import {DatastoreService} from "./datastore.service";


@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  private _planets = new BehaviorSubject<Planet[]>([]);
  private _movies = new BehaviorSubject<Movie[]>([]);
  private _people = new BehaviorSubject<Person[]>([]);

  readonly planets = this._planets.asObservable();
  readonly movies = this._movies.asObservable();
  readonly people = this._people.asObservable();

  planetsLoaded = false;
  moviesLoaded = false;
  peopleLoaded = false;

  planetsInProgress = false;
  moviesInProgress = false;
  peopleInProgress = false;

  constructor(private http: HttpClient, private datastoreService: DatastoreService) { }

  loadPlanets(target: string = 'https://swapi.co/api/planets/') {
    if(this.planetsLoaded === false && this.planetsInProgress === false) {
      this.http.get(target).subscribe(data => {
        for (let i in (data as any).results) {
          let planet: Planet = new Planet((data as any).results[i]);
          this.datastoreService.setPlanet(planet);
        }
        this._planets.next(Object.assign({}, this.datastoreService.getPlanetStore()).planets);
        if ((data as any).next) {
          this.loadPlanets((data as any).next);
        } else {
          this.planetsLoaded = true;
          this.planetsInProgress = false;
        }
      })
    }
  }

  loadPeople(target: string = 'https://swapi.co/api/people/') {
    if(this.peopleLoaded === false && this.peopleInProgress === false) {
      this.http.get(target).subscribe(data => {
        for (let i in (data as any).results) {
          let person: Person = new Person((data as any).results[i]);
          this.datastoreService.setPerson(person)
        }
        this._people.next(Object.assign({}, this.datastoreService.getPersonStore()).people);
        if ((data as any).next) {
          this.loadPeople((data as any).next);
        } else {
          this.peopleLoaded = true;
          this.peopleInProgress = false;
        }
      })
    }
  }

  loadMovies(target: string = 'https://swapi.co/api/films/') {
    if(this.moviesLoaded === false && this.moviesInProgress === false) {
      this.http.get(target).subscribe(data => {
        for (let i in (data as any).results) {
          let movie: Movie = new Movie((data as any).results[i]);
          this.datastoreService.setMovie(movie);
        }
        this._movies.next(Object.assign({}, this.datastoreService.getMovieStore()).movies);
        if ((data as any).next) {
          this.loadMovies((data as any).next);
        } else {
          this.moviesLoaded = true;
          this.moviesInProgress = false;
        }
      })
    }
  }
}
