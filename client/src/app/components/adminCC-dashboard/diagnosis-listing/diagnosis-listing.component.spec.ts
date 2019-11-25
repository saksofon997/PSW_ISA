import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisListingComponent } from './diagnosis-listing.component';

describe('DiagnosisListingComponent', () => {
  let component: DiagnosisListingComponent;
  let fixture: ComponentFixture<DiagnosisListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
