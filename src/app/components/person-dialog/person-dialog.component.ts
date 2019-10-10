import {Component, HostListener, Inject, OnInit} from '@angular/core';
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
  homeworldLoading = false;
  movies: Movie[] = new Array<Movie>();
  movieLoading = false;
  public innerWidth: any;

  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person,
    public planetApiService: StarwarsApiPlanetsService,
    public movieApiService: StarwarsApiMoviesService,
    public dialogService: DialogService) {

    this.homeworldLoading = true;
    planetApiService.loadPlanet(person.homeworld).subscribe(data => {
      this.homeworld = new Planet(data);
      this.homeworldLoading = false;
    });

    this.homeworldLoading = true;
    for(let i in person.films) {
      movieApiService.loadMovie(person.films[i]).subscribe(data => {
        this.movies.push(new Movie(data));
        this.homeworldLoading = false;
      })
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
