import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MatDialog} from "@angular/material/dialog";
import {PersonDialogComponent} from "../person-dialog/person-dialog.component";
import {MovieDialogComponent} from "../movie-dialog/movie-dialog.component";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(movie: Movie) {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '250px',
      data: movie
    })
  }
}
