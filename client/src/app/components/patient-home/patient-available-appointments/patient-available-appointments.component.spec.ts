import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAvailableAppointmentsComponent } from './patient-available-appointments.component';

describe('PatientAvailableAppointmentsComponent', () => {
  let component: PatientAvailableAppointmentsComponent;
  let fixture: ComponentFixture<PatientAvailableAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAvailableAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAvailableAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
