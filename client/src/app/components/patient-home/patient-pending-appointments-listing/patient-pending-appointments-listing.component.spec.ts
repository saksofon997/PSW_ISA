import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPendingAppointmentsListingComponent } from './patient-pending-appointments-listing.component';

describe('PatientPendingAppointmentsListingComponent', () => {
  let component: PatientPendingAppointmentsListingComponent;
  let fixture: ComponentFixture<PatientPendingAppointmentsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPendingAppointmentsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPendingAppointmentsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
