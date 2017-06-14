import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateAlgebraCourseComponent } from './intermediate-algebra-course.component';

describe('IntermediateAlgebraCourseComponent', () => {
  let component: IntermediateAlgebraCourseComponent;
  let fixture: ComponentFixture<IntermediateAlgebraCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediateAlgebraCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateAlgebraCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
