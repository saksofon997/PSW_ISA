import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinationListingComponent } from './ordination-listing.component';

describe('OrdinationListingComponent', () => {
  let component: OrdinationListingComponent;
  let fixture: ComponentFixture<OrdinationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
