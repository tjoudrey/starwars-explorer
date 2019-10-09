import { TestBed } from '@angular/core/testing';

import { StarwarsApiMoviesService } from './starwars-api-movies.service';

describe('StarwarsApiMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsApiMoviesService = TestBed.get(StarwarsApiMoviesService);
    expect(service).toBeTruthy();
  });
});
