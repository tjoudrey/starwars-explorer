import { Component, OnInit } from '@angular/core';
import {StarwarsApiService} from "../../services/starwars-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  private loading: boolean = false;
  // private results: Observable<Response[]>;

  constructor(private starwarsAPIService:StarwarsApiService) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.loading = true;

  }

}
