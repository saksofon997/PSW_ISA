import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinationSelectionComponent } from './ordination-selection.component';

describe('OrdinationSelectionComponent', () => {
  let component: OrdinationSelectionComponent;
  let fixture: ComponentFixture<OrdinationSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinationSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
