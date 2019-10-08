import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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

  private dataStore: { planets: Planet[], movies: Movie[], people: Person[] };

  readonly planets = this._planets.asObservable();
  readonly movies = this._movies.asObservable();
  readonly people = this._people.asObservable();

  constructor(private http: HttpClient) { }

  // get people() {
  //   return this._people.asObservable();
  // }

  loadPlanets() {
    this.http.get('https://swapi.co/api/planets/').subscribe(data => {
      console.log(data)
    })
  }
}
