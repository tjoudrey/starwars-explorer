import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MainComponent } from './views/main/main.component';
import { PeopleComponent } from './views/people/people.component';
import { PlanetComponent } from './views/planet/planet.component';
import { MovieComponent } from './views/movie/movie.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PeopleComponent,
    PlanetComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
