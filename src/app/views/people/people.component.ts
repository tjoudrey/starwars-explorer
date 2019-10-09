import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {StarwarsApiService} from "../../services/starwars-api.service";
import {Person} from "../../models/person";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private starwarsAPIService:StarwarsApiService) { }

  ngOnInit() {
    this.people = this.starwarsAPIService.people;
    this.starwarsAPIService.loadPeople();
  }
}
