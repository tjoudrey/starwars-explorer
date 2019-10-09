import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { PlanetRoutingModule } from "./planet-routing.module";
import { PlanetComponent } from "./planet.component";
import { PlanetCardComponent } from "../../components/planet-card/planet-card.component";

@NgModule({
  imports: [
    CommonModule,
    PlanetRoutingModule,
    MatCardModule,
  ],
  declarations: [
    PlanetComponent,
    PlanetCardComponent,
  ]
})
export class PlanetModule {}
