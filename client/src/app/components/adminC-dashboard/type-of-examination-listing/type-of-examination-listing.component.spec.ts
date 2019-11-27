import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfExaminationListingComponent } from './type-of-examination-listing.component';

describe('TypeOfExaminationListingComponent', () => {
  let component: TypeOfExaminationListingComponent;
  let fixture: ComponentFixture<TypeOfExaminationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfExaminationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfExaminationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
