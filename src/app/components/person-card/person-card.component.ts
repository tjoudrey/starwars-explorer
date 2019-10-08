import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {Person} from "../../models/person";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person: Person;

  constructor() { }

  ngOnInit() {
  }

}
