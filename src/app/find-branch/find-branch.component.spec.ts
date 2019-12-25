import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBranchComponent } from './find-branch.component';

describe('FindBranchComponent', () => {
  let component: FindBranchComponent;
  let fixture: ComponentFixture<FindBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
