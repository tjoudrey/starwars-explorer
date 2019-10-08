export class Movie {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
  // characters: string[];
  // planets: string[];

  constructor(data) {
    this.title = data.title;
    this.episode_id = data.episode_id;
    this.director = data.director;
    this.producer = data.producer;
    this.release_date = data.release_date;
  }
}
