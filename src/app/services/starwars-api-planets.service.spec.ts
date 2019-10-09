import { TestBed } from '@angular/core/testing';

import { StarwarsApiPlanetsService } from './starwars-api-planets.service';

describe('StarwarsApiPlanetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsApiPlanetsService = TestBed.get(StarwarsApiPlanetsService);
    expect(service).toBeTruthy();
  });
});
