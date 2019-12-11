/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NursePatientListingComponent } from './nurse-patient-listing.component';

describe('NursePatientListingComponent', () => {
  let component: NursePatientListingComponent;
  let fixture: ComponentFixture<NursePatientListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursePatientListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursePatientListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
