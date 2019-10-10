import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Movie} from "../../models/movie";
import {StarwarsApiPlanetsService} from "../../services/starwars-api-planets.service";
import {StarwarsApiMoviesService} from "../../services/starwars-api-movies.service";
import {DialogService} from "../../services/dialog.service";
import {StarwarsApiPeopleService} from "../../services/starwars-api-people.service";
import {Person} from "../../models/person";
import {Planet} from "../../models/planet";

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {

  characters: Person[] =  Array<Person>();
  planets: Planet[] = Array<Planet>();

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie,
    public planetApiService: StarwarsApiPlanetsService,
    public peopleApiService: StarwarsApiPeopleService,
    public dialogService: DialogService) {

    for(let i in movie.characters) {
      peopleApiService.loadPerson(movie.characters[i]).subscribe(data => {
        this.characters.push(new Person(data))
      })
    }

    for(let i in movie.planets) {
      planetApiService.loadPlanet(movie.planets[i]).subscribe(data => {
        this.planets.push(new Planet(data));
      })
    }
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
