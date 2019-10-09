import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../models/person";
import {StarwarsApiPeopleService} from "../../services/starwars-api-people.service";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private apiService:StarwarsApiPeopleService) { }

  ngOnInit() {
    this.people = this.apiService.people;
    this.apiService.loadPeople();
  }
}
