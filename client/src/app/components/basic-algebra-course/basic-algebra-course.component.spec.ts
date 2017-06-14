import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAlgebraCourseComponent } from './basic-algebra-course.component';

describe('BasicAlgebraCourseComponent', () => {
  let component: BasicAlgebraCourseComponent;
  let fixture: ComponentFixture<BasicAlgebraCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAlgebraCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAlgebraCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
