import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbranchesComponent } from './ourbranches.component';

describe('OurbranchesComponent', () => {
  let component: OurbranchesComponent;
  let fixture: ComponentFixture<OurbranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurbranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
