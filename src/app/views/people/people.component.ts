import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Planet} from "../../models/planet";
import {StarwarsApiService} from "../../services/starwars-api.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  private loading: boolean = false;
  people: Observable<Person[]>;
  // private results: Observable<Response[]>;

  constructor(private starwarsAPIService:StarwarsApiService) { }

  ngOnInit() {
    this.people = this.starwarsAPIService.people;
    this.starwarsAPIService.loadPeople();
  }
}
