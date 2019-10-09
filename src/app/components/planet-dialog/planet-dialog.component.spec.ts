import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDialogComponent } from './planet-dialog.component';

describe('PlanetDialogComponent', () => {
  let component: PlanetDialogComponent;
  let fixture: ComponentFixture<PlanetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
