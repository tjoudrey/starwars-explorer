export class Planet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;

  constructor(data) {
    this.name = data.name;
    this.diameter = data.diameter;
    this.rotation_period = data.rotation_period;
    this.orbital_period = data.orbital_period;
    this.gravity = data.gravity;
    this.population = data.population;
    this.climate = data.climate;
    this.terrain = data.terrain;
    this.surface_water = data.surface_water;
  }
}
