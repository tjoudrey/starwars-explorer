import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../models/person";
import {MatDialog} from "@angular/material/dialog";
import {PersonDialogComponent} from "../person-dialog/person-dialog.component";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person: Person;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(person: Person) {
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      width: '250px',
      data: person
    })
  }

}
