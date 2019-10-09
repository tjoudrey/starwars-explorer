import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../models/person";
import {StarwarsApiPlanetsService} from "../../services/starwars-api-planets.service";
import {Planet} from "../../models/planet";
import {DialogService} from "../../services/dialog.service";
import {StarwarsApiMoviesService} from "../../services/starwars-api-movies.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
})
export class PersonDialogComponent implements OnInit {

  homeworld: Planet;
  movies: Movie[] = new Array<Movie>();

  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person,
    public planetApiService: StarwarsApiPlanetsService,
    public movieApiService: StarwarsApiMoviesService,
    public dialogService: DialogService) {

    planetApiService.loadPlanet(person.homeworld).subscribe(data => {
      this.homeworld = new Planet(data);
    });

    for(let i in person.films) {
      movieApiService.loadMovie(person.films[i]).subscribe(data => {
        this.movies.push(new Movie(data))
      })
    }
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
