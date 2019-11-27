/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatientPersonalProfileComponent } from './patient-personal-profile.component';

describe('PatientPersonalProfileComponent', () => {
  let component: PatientPersonalProfileComponent;
  let fixture: ComponentFixture<PatientPersonalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPersonalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
