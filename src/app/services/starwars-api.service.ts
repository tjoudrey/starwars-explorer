import { Injectable } from '@angular/core';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Planet} from "../models/planet";
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {Movie} from "../models/movie";
import {Person} from "../models/person";


@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  private _planets = new BehaviorSubject<Planet[]>([]);
  private _movies = new BehaviorSubject<Movie[]>([]);
  private _people = new BehaviorSubject<Person[]>([]);

  private  planetDataStore: { planets: Planet[]} = {planets: []};
  private  movieDataStore: { movies: Movie[]} = {movies: []};
  private  peopleDataStore: { people: Person[]} = {people: []};

  readonly planets = this._planets.asObservable();
  readonly movies = this._movies.asObservable();
  readonly people = this._people.asObservable();

  planetsLoaded = false;
  moviesLoaded = false;
  peopleLoaded = false;

  planetsInProgress = false;
  moviesInProgress = false;
  peopleInProgress = false;

  constructor(private http: HttpClient) { }

  loadPlanets() {
    if(this.planetsLoaded === false && this.planetsInProgress === false){
      this.planetsInProgress = true;
    this.http.get('https://swapi.co/api/planets/').subscribe(data => {
      for (let i in (data as any).results) {
        let p: Planet = new Planet((data as any).results[i]);
        this.planetDataStore.planets.push(p);
      }
      this._planets.next(Object.assign({}, this.planetDataStore).planets);
      if((data as any).next) {
        this.loadPlanetsCont((data as any).next);
      }
    })
    }
  }

  private loadPlanetsCont(next: string) {
    this.http.get(next).subscribe(data => {
      for (let i in (data as any).results) {
        let p: Planet = new Planet((data as any).results[i]);
        this.planetDataStore.planets.push(p);
      }
      this._planets.next(Object.assign({}, this.planetDataStore).planets);
      if((data as any).next) {
        this.loadPlanetsCont((data as any).next);
      } else {
        this.planetsLoaded = true;
        this.planetsInProgress = false;
      }
    })
  }

  loadPeople() {
    if(this.peopleLoaded === false && this.peopleInProgress === false) {
      this.peopleInProgress = true;
      this.http.get('https://swapi.co/api/people/').subscribe(data => {
        for (let i in (data as any).results) {
          let p: Person = new Person((data as any).results[i]);
          this.peopleDataStore.people.push(p);
        }
        this._people.next(Object.assign({}, this.peopleDataStore).people);
        if ((data as any).next) {
          this.loadPeopleCont((data as any).next);
        }
      })
    }
  }

  private loadPeopleCont(next: string) {
    this.http.get(next).subscribe(data => {
      for (let i in (data as any).results) {
        let p: Person = new Person((data as any).results[i]);
        this.peopleDataStore.people.push(p);
      }
      this._people.next(Object.assign({}, this.peopleDataStore).people);
      if((data as any).next) {
        this.loadPeopleCont((data as any).next);
      } else {
        this.peopleLoaded = true;
        this.peopleInProgress = false;
      }
    })
  }

  loadMovies() {
    if(this.moviesLoaded === false && this.moviesInProgress === false) {
      this.http.get('https://swapi.co/api/films/').subscribe(data => {
        for (let i in (data as any).results) {
          let m: Movie = new Movie((data as any).results[i]);
          this.movieDataStore.movies.push(m);
        }
        this._movies.next(Object.assign({}, this.movieDataStore).movies);
        if ((data as any).next) {
          this.loadMoviesCont((data as any).next);
        } else {
          this.moviesLoaded = true;
          this.moviesInProgress = false
        }
      })
    }
  }

  //Thanks to disney this function will be needed sooner than later
  private loadMoviesCont(next: string) {
    this.http.get(next).subscribe(data => {
      for (let i in (data as any).results) {
        let m: Movie = new Movie((data as any).results[i]);
        this.movieDataStore.movies.push(m);
      }
      this._people.next(Object.assign({}, this.peopleDataStore).people);
      if((data as any).next) {
        this.loadMoviesCont((data as any).next);
      } else {
        this.moviesLoaded = true;
        this.moviesInProgress = false
      }
    })
  }

}
