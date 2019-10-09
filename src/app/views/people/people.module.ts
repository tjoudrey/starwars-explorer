import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {PeopleRoutingModule} from "./people-routing.module";
import {MatCardModule} from "@angular/material/card";
import {PeopleComponent} from "./people.component";
import {PersonCardComponent} from "../../components/person-card/person-card.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    PeopleComponent,
    PersonCardComponent,
  ]
})
export class PeopleModule {}
