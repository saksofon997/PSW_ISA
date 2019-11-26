import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableAppointmentListingComponent } from './available-appointment-listing.component';

describe('AvailableAppointmentListingComponent', () => {
  let component: AvailableAppointmentListingComponent;
  let fixture: ComponentFixture<AvailableAppointmentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableAppointmentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableAppointmentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
