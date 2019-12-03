/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NurseFormComponent } from './nurse-form.component';

describe('NurseFormComponent', () => {
  let component: NurseFormComponent;
  let fixture: ComponentFixture<NurseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
