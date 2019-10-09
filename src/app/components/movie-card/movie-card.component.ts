import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MatDialog} from "@angular/material/dialog";
import {PersonDialogComponent} from "../person-dialog/person-dialog.component";
import {MovieDialogComponent} from "../movie-dialog/movie-dialog.component";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }
}
