import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicAdministratorsListingComponent } from './clinic-administrators-listing.component';

describe('ClinicAdministratorsListingComponent', () => {
  let component: ClinicAdministratorsListingComponent;
  let fixture: ComponentFixture<ClinicAdministratorsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicAdministratorsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicAdministratorsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
