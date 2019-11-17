import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationListingComponent } from './medication-listing.component';

describe('MedicationListingComponent', () => {
  let component: MedicationListingComponent;
  let fixture: ComponentFixture<MedicationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
