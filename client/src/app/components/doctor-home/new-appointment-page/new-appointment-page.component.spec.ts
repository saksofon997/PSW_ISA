import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppointmentPageComponent } from './new-appointment-page.component';

describe('NewAppointmentPageComponent', () => {
  let component: NewAppointmentPageComponent;
  let fixture: ComponentFixture<NewAppointmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppointmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
