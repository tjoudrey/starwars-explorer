import { TestBed } from '@angular/core/testing';

import { StarwarsApiServiceService } from './starwars-api-service.service';

describe('StarwarsApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsApiServiceService = TestBed.get(StarwarsApiServiceService);
    expect(service).toBeTruthy();
  });
});
