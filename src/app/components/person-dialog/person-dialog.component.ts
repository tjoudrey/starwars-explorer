import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../models/person";

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
})
export class PersonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>, @Inject(MAT_DIALOG_DATA) public person: Person) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
