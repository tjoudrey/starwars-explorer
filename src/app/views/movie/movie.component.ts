import { Component, OnInit } from '@angular/core';
import {StarwarsApiService} from "../../services/starwars-api.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private starwarsAPIService: StarwarsApiService) { }

  ngOnInit() {
  }

}
