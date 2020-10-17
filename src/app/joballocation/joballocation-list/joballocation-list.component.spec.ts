import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoballocationListComponent } from './joballocation-list.component';

describe('JoballocationListComponent', () => {
  let component: JoballocationListComponent;
  let fixture: ComponentFixture<JoballocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoballocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoballocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
