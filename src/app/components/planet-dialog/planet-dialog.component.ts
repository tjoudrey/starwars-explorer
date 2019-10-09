import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Planet} from "../../models/planet";

@Component({
  selector: 'app-planet-dialog',
  templateUrl: './planet-dialog.component.html',
})
export class PlanetDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlanetDialogComponent>, @Inject(MAT_DIALOG_DATA) public planet: Planet) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
