import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAvailableAppointmentPageComponent } from './new-available-appointment-page.component';

describe('NewAvailableAppointmentPageComponent', () => {
  let component: NewAvailableAppointmentPageComponent;
  let fixture: ComponentFixture<NewAvailableAppointmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAvailableAppointmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAvailableAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
