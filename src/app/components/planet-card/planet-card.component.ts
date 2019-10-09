import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {Planet} from "../../models/planet";
import {MatDialog} from "@angular/material/dialog";
import {PlanetDialogComponent} from "../planet-dialog/planet-dialog.component";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {

  @Input()
  planet: Planet;

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }

}
