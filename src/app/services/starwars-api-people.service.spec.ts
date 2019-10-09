import { TestBed } from '@angular/core/testing';

import { StarwarsApiPeopleService } from './starwars-api-people.service';

describe('StarwarsApiPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsApiPeopleService = TestBed.get(StarwarsApiPeopleService);
    expect(service).toBeTruthy();
  });
});
