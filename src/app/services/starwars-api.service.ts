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

  // private dataStore: { planets: Planet[], movies: Movie[], people: Person[] };

  private  planetDataStore: { planets: Planet[]} = {planets: []};

  readonly planets = this._planets.asObservable();
  readonly movies = this._movies.asObservable();
  readonly people = this._people.asObservable();

  constructor(private http: HttpClient) { }

  // get people() {
  //   return this._people.asObservable();
  // }

  loadPlanets() {
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

  private loadPlanetsCont(next: string) {
    this.http.get(next).subscribe(data => {
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
