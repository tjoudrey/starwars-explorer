export class  Person {
  name: string;
  height: number;
  mass: number;
  hair_colour: string;
  skin_colour: string;
  eye_colour: string;
  birth_year: string;
  gender: string;
  // homeworld: string;
  // films: string[];

  constructor(data) {
    this.name = data.name;
    this.height = data.height;
    this.mass = data.mass;
    this.hair_colour = data.hair_colour;
    this.skin_colour = data.skin_colour;
    this.eye_colour = data.mass;
    this.birth_year = data.mass;
    this.gender = data.mass;
  }
}
