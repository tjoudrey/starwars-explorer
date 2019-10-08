import { Component, OnInit } from '@angular/core';
import {StarwarsApiService} from "../../services/starwars-api.service";
import {Observable} from "rxjs";
import {Planet} from "../../models/planet";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  private loading: boolean = false;
  planets: Observable<Planet[]>;
  // private results: Observable<Response[]>;

  constructor(private starwarsAPIService:StarwarsApiService) { }

  ngOnInit() {
    this.planets = this.starwarsAPIService.planets;
    this.starwarsAPIService.loadPlanets();
  }


}
