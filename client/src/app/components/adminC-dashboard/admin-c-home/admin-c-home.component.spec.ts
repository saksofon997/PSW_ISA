import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCHomeComponent } from './admin-c-home.component';

describe('AdminCHomeComponent', () => {
  let component: AdminCHomeComponent;
  let fixture: ComponentFixture<AdminCHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
