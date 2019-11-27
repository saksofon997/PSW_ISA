import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfExaminationFormComponent } from './type-of-examination-form.component';

describe('TypeOfExaminationFormComponent', () => {
  let component: TypeOfExaminationFormComponent;
  let fixture: ComponentFixture<TypeOfExaminationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfExaminationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfExaminationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
