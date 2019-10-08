import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Planet} from "../models/planet";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  constructor(private http: HttpClient) { }

  // getPlanets(): void{
  //   let uri = 'https://swapi.co/api/planets/';
  //   this.http.get(uri).
  // }
}
