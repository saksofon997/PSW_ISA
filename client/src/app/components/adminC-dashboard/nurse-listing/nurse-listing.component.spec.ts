/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NurseListingComponent } from './nurse-listing.component';

describe('NurseListingComponent', () => {
  let component: NurseListingComponent;
  let fixture: ComponentFixture<NurseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
